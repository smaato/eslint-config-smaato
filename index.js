module.exports = {
  env: {
    jasmine: true,
  },
  extends: 'airbnb',
  plugins: [
    'jasmine',
  ],
  rules: {
    'jasmine/no-disabled-tests': 2,
    'jasmine/no-spec-dupes': [2, 'branch'],
    'jasmine/no-suite-dupes': [2, 'branch'],
    'max-len': [2, 80, 2, {
      ignoreUrls: true,
      ignoreComments: true,
    }],
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxEOF: 1,
    }],
  },
};
