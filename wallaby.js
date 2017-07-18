module.exports = (wallaby) => ({
  files: [
    'src/**/*.js',
  ],

  tests: [
    '__tests__/**/*.test.js',
  ],

  env: {
    type: 'node',
  },

  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },

  testFramework: 'jest',
});
