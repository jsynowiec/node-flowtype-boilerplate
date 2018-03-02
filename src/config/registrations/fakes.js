export default [
  {
    plugin: {
      register: './config/plugins/fakes',
      dependencies: 'container',
    },
  },
];
