const request = require('request');
// const exec = require('child_process').exec;
const { defineSupportCode } = require('cucumber');

const baseUrl = 'http://localhost:8000';

function CustomWorld() {
  this.request = request;
  this.get = (uri, headers) => request.get({
    url: baseUrl + uri,
    headers,
  });

  this.context = {};

    // exec("npm run start", {cwd: __dirname}, (error, stdout, stderr) => {
    //     console.log("error.." + error);
    //     console.log("stdout.." + stdout);
    //     console.log("stderr.." + stderr);
    // });
}

defineSupportCode(({ setWorldConstructor }) => {
  setWorldConstructor(CustomWorld);
});
