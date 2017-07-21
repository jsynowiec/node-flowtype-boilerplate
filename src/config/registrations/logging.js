export default [
  {
    plugin: {
      register: 'good',
      options: {
        reporters: {
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
