const gulp = require('gulp');
const zip = require('gulp-zip');
const clean = require('gulp-clean');
const gutil = require('gulp-util');
const replace = require('gulp-replace');
const AWS = require('aws-sdk');
const fs = require('fs');
const cfn = require('cfn');


const environment = process.env.ENVIRONMENT || 'dev';
const appName = environment === 'production' ? process.env.APPNAME_PROD : process.env.APPNAME || 'TEST';
const version = process.env.APPVERSION || '0.0.1';
const LogglyToken =  environment === 'production' ? process.env.LOGGLY_TOKEN_PROD : process.env.LOGGLY_TOKEN;
const LogglySubdomain = environment === 'production' ? process.env.LOGGLY_SUBDOMAIN_PROD : process.env.LOGGLY_SUBDOMAIN;
const DBNAME = environment === 'production' ? process.env.DBNAME_PROD : process.env.DBNAME;
const DBUSER = environment === 'production' ? process.env.DBUSER_PROD : process.env.DBUSER;
const DBPASS = environment === 'production' ? process.env.DBPASS_PROD : process.env.DBPASS;  

let awsConfig = {
  accessKeyId: environment === 'production' ? process.env.AWS_ACCESS_KEY_ID_PROD : process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: environment === 'production' ? process.env.AWS_SECRET_ACCESS_KEY_PROD : process.env.AWS_SECRET_ACCESS_KEY,
  region: environment === 'production' ? process.env.AWS_REGION_PROD : process.env.AWS_REGION
}

AWS.config.update(awsConfig);

gulp.task('templates', function(){
  gulp.src(['Dockerrun.aws.json'])
    .pipe(replace('$APPNAME', appName))
    .pipe(replace('$ENVIRONMENT', environment))
    .pipe(replace('$APPVERSION', version))
    .pipe(gulp.dest('./'));
});

gulp.task('zip-app',['templates'], () => gulp.src(['Dockerrun.aws.json', '.ebextensions/**/*.*'], {
  base: './',
}).pipe(zip(`${appName}-${version}.zip`)).pipe(gulp.dest('./zip')));

gulp.task('clean', () => gulp.src(['dist/', 'zip/'], {
  read: false,
}).pipe(clean()));

gulp.task('push-to-s3',['zip-app'], (done) => {
  const s3 = new AWS.S3();
  s3.createBucket({
    Bucket: `${appName}-${environment}`,
  }, (err) => {
    if (err && err.code !== 'BucketAlreadyOwnedByYou') {
      throw new gutil.PluginError('push-to-s3', err);
    }
    s3.upload({
      Bucket: `${appName}-${environment}`,
      Key: `${appName}-${version}.zip`,
      Body: fs.createReadStream(`zip/${appName}-${version}.zip`),
    }, (uploadErr) => {
      if (uploadErr) {
        throw new gutil.PluginError('push-to-s3', uploadErr);
      }
      done();
    });
  });
});

gulp.task('update-elastic-beanstalk', ['push-to-s3'], (done) => {
  const eb = new AWS.ElasticBeanstalk();
  eb.createApplicationVersion({
    ApplicationName: appName,
    VersionLabel: version,
    SourceBundle: {
      S3Bucket: `${appName}-${environment}`,
      S3Key: `${appName}-${version}.zip`,
    },
  }, (err) => {
    if (err) {
      throw new gutil.PluginError('update-elastic-beanstalk', err);
    }
    done();
  });
});

gulp.task('deploy',['update-elastic-beanstalk'], (done) => {
  return cfn({
    name: appName+"-"+environment,
    template: __dirname + '/template.yaml',
    cfParams: { 
      EnvType: environment,
      AppVersion: version,
      NeedPostgresDB: 'y',
      ApplicationName: appName,
      DBName: DBNAME,
      DBuser: DBUSER,
      DBpassword: DBPASS,
      LogglyToken: LogglyToken,
      LogglySubdomain: LogglySubdomain
     },
    awsConfig: awsConfig
  }).then(function(data) {
    console.log('done')
  },
  function(error) {
    throw new gutil.PluginError('cloudformation', error);
  });
});


