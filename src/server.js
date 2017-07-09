'use strict';

const Glue = require('glue');
const manifest = require('./manifest.json');

const options = {
    relativeTo: __dirname
};

Glue.compose(manifest, options, (err, server) => {
    if (err) {
        throw err;
    }
    server.start(() => {
        console.log('✅  Serve started.');
    });
});