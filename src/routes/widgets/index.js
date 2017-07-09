const pkg = {};
const Joi = require('joi');

export function register (server, options, next) {

  server.route([{
    method: 'GET',
    path: '/widgets',
    config: {
      tags: ['api'],      
      handler: (request, reply) => {
        server.app.dispatcher.dispatch({ type: 'getAllWidgets' })
          .subscribe((response) => {
            reply(response);
          });
      }
    }
  },{
    method: 'GET',
    path: '/widgets/{id}',
    config: {
      tags: ['api'],
      handler: (request, reply) => {
        server.app.dispatcher.dispatch({ type: 'getOneWidget', id: request.params.id })
          .subscribe((response) => {
            reply(response);
          });
      } 
    }
  },{
    method: 'DELETE',
    path: '/widgets/{id}',
    config: {
      tags: ['api'],
      handler: (request, reply) => {
        server.app.dispatcher.dispatch({ type: 'removeWidget', id: request.params.id })
          .subscribe((response) => {
            reply(response);
          });
      },
      validate: {
          params: {
              id : Joi.number()
                      .required()
                      .description('the id for the widget'),
          }
      }
    }
  },{
    method: 'POST',
    path: '/widgets',
    config: {
      tags: ['api'],
      handler: (request, reply) => {
        server.app.dispatcher.dispatch({ type: 'createWidget', name: 'purple-urple', size: 'ginormous' })
          .subscribe((response) => {
            reply(response);
          });
      }
    }
  },{
    method: 'PUT',
    path: '/widgets/{id}',
    config: {
      tags: ['api'],
      handler: (request, reply) => {
        server.app.dispatcher.dispatch({ type: 'modifyWidget', id: request.params.id, size: 'smallish' })
          .subscribe((response) => {
            reply(response);
          });
      },
      validate: {
          params: {
              id : Joi.number()
                      .required()
                      .description('the id for the widget'),
          }
      }
    }
  }]);

  next();
};

exports.register.attributes = require('./package.json');