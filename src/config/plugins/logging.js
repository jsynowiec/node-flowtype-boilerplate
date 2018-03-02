/* eslint-disable no-console */
const GoodWinston = require('good-winston');
const winston = require('winston');
require('winston-loggly');

const env = process.env.NODE_ENV || 'dev';
const options = require('../loggly')[env];

if (env === 'production') {
  winston.add(winston.transports.Loggly, options);
}

if (env === 'dev') {
  winston.add(winston.transports.File, { level: 'error', filename: 'errorLogs.log' });
}
const goodWinstonStream = new GoodWinston({ winston });

export default [
  {
    plugin: {
      register: 'good',
      options: {
        reporters: {
          winston: [goodWinstonStream],
          console: [
            {
              module: 'good-console',
            },
            'stdout',
          ],
        },
      },
    },
  },
];
