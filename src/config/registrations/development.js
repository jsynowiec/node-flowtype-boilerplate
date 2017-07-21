const Pack = require('../../../package.json');

export default [
  {
    plugin: {
      register: 'inert',
    },
  },
  {
    plugin: {
      register: 'vision',
    },
  },
  {
    plugin: {
      register: 'hapi-swagger',
      options: {
        info: {
          title: `${Pack.name} API Documentation`,
          version: Pack.version,
        },
      },
    },
  },
  {
    plugin: {
      register: 'blipp',
    },
  },
];
