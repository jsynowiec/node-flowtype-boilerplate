'use strict';

const mototaxi = require('mototaxi');
const mototaxi_config = require('./config/mototaxi.js'); 
const dispatcher = mototaxi.getDispatcher(mototaxi_config);
    
const Glue = require('glue');
const manifest = require('./config');
const Pack = require('./package.json');

const options = {
    relativeTo: __dirname
};

Glue.compose(manifest, options, (err, server) => {
    if (err) {
        throw err;
    }

    server.app.dispatcher = dispatcher;
    
    server.start(() => {
        console.log(`✅  ${Pack.name} started.`);
    });
});