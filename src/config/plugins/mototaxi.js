/* eslint-disable no-console, no-param-reassign */

import * as mototaxi from 'mototaxi';
import { commandHandlers } from '../../domain';

export function register(server, options, next) {
  const logger = {
    log: (message) => {
      console.log(`mototaxi: ${message}`);
    },
  };

  const resolve = (handlerType) => {
    const resolved = server.app.container.resolve(`${handlerType.name}Handler`);
    return resolved;
  };

  const config = {
    logger,
    commandHandlers,
    resolve,
  };

  const dispatcher = mototaxi.getDispatcher(config);
  server.app.dispatcher = dispatcher;

  next();
}

exports.register.attributes = { name: 'mototaxi', version: '1.0.0' };
