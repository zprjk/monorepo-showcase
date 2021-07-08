module.exports = {
  // run our tests in node env (not in a browser)
  testEnvironment: 'jest-environment-node',
  // Code coverage reporting from the actual source code
  collectCoverageFrom: ['packages/*/src/**/*.{js,ts}'],

  // Ensure we never drop below a certain level of coverage.
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 80,
      functions: 90,
      lines: 90,
    },
    // 's-date/**/*.js': {
    //   statements: 100,
    //   branches: 100,
    //   functions: 100,
    //   lines: 100,
    // },
  },

  watchPlugins: [
    // jest-watch: Feedback for filtering our tests by file name or test name
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
