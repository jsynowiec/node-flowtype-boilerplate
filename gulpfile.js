const gulp = require('gulp');
const zip = require('gulp-zip');
const clean = require('gulp-clean');
const gutil = require('gulp-util');
const AWS = require('aws-sdk');
const fs = require('fs');
const cfn = require('cfn');

const environment = process.env.ENVIRONMENT || 'dev';
const appName = environment === 'production' ? process.env.APPNAME_PROD : process.env.APPNAME || 'TEST';
const version = process.env.APPVERSION || '0.0.1';

let awsConfig = {
  accessKeyId: environment === 'production' ? process.env.AWS_ACCESS_KEY_ID_PROD : process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: environment === 'production' ? process.env.AWS_SECRET_ACCESS_KEY_PROD : process.env.AWS_SECRET_ACCESS_KEY,
  region: environment === 'production' ? process.env.AWS_REGION_PROD : process.env.AWS_REGION
}

AWS.config.update(awsConfig);

gulp.task('zip-app', () => gulp.src(['./package.json', './dist/**/*.*', '.ebextensions/**/*.*'], {
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
  console.log(__dirname)
  return cfn({
    name: appName+"-"+environment+"-stack",
    template: __dirname + '/template.yaml',
    awsConfig: awsConfig
  }).then(function(data) {
    console.log('done')
  },
  function(error) {
    throw new gutil.PluginError('cloudformation', error);
  });
});


