import { EncounterModel } from '../../domain/validators/encounter.schema';

const Joi = require('joi');

export function register(server, options, next) {
  const dispatch = (cmd) => new Promise((resolve) => {
    server.app.dispatcher.dispatch(cmd)
      .subscribe((response) => {
        resolve(response);
      });
  });
  server.route([{
    method: 'GET',
    path: '/encounters',
    config: {
      auth: 'jwt',
      tags: ['api'],
      handler: (request, reply) => {
        reply(dispatch({ type: 'getAllEncounters', userId: request.auth.credentials.id }));
      },
    },
  }, {
    method: 'GET',
    path: '/encounters/{id}',
    config: {
      auth: 'jwt',
      tags: ['api'],
      handler: (request, reply) => {
        reply(dispatch({ type: 'getOneEncounter', id: request.params.id }));
      },
      validate: {
        params: {
          id: Joi.number()
            .required()
            .description('the id for the encounter'),
        },
      },
    },
  }, {
    method: 'DELETE',
    path: '/encounters/{id}',
    config: {
      auth: 'jwt',
      tags: ['api'],
      handler: (request, reply) => {
        reply(dispatch({ type: 'removeEncounter', id: request.params.id }));
      },
      validate: {
        params: {
          id: Joi.number()
            .required()
            .description('the id for the encounter'),
        },
      },
    },
  }, {
    method: 'POST',
    path: '/encounters',
    config: {
      auth: 'jwt',
      tags: ['api'],
      handler: (request, reply) => {
        reply(dispatch({
          type: 'createEncounter',
          name: 'purple-urple',
          age: 25,
          bloodType: 'B+',
        }));
      },
      validate: {
        payload: EncounterModel,
      },
    },
  }, {
    method: 'PUT',
    path: '/encounters/{id}',
    config: {
      auth: 'jwt',
      tags: ['api'],
      handler: (request, reply) => {
        reply(dispatch({ type: 'modifyEncounter', id: request.params.id, modify: { name: 'cambióaaaaaaa', age: 40 } }));
      },
      validate: {
        payload: EncounterModel,
        params: {
          id: Joi.number()
            .required()
            .description('the id for the encounter'),
        },
      },
    },
  }]);

  next();
}

exports.register.attributes = require('./package.json');
