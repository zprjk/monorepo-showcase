module.exports = {
  // Ensure eslint linting when git committing
  '*.{js,ts}': ['eslint --fix', 'git add'],

  // Ensure prettier code format when git committing
  '*.{js,json,ts,md}': ['prettier --write', , 'git add'],

  // Ensure tests work when git committing
  '*.{js,ts}': ['jest --findRelatedTests'],
};
