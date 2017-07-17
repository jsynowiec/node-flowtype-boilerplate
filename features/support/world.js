'use strict';

var request = require('request');
var exec = require('child_process').exec;
var {defineSupportCode} = require('cucumber');

const baseUrl = 'http://localhost:8000';


function CustomWorld() {

    this.request = request;
    this.get = (uri, headers) => request.get({
      url: baseUrl + uri,
      headers: headers
    });

    this.context = new Object();
    
    // exec("npm run start", {cwd: __dirname}, (error, stdout, stderr) => {
    //     console.log("error.." + error);
    //     console.log("stdout.." + stdout);
    //     console.log("stderr.." + stderr);        
    // });
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})