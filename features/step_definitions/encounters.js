const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    let token = '';

    Given('a doctor with valid credentials', function (callback) {        
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A';
        callback();
    });

    Given('with no encounters', function (callback) {
        callback();
    });

    Given('with many encounters', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    When('I request a list of encounters', function (callback) {
        this.get('/encounters', { 'Authorization': this.token })
            .on('data', (data) => {
                this.context.encounters = JSON.parse(data);
                callback();
            });        
    });

    Then('I should receive an empty list', function (callback) {
        this.context.encounters.should.be.empty;
        callback();
    });

    Then('I should receive a complete list', function (callback) {
        this.context.encounters.should.not.be.empty;
        callback();
    });
});