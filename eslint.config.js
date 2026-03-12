import config, { browser, mocha } from '@goastian/eslint-config-mw';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...config,
  ...browser,
  {
    files: ['test/**/*.js'],
    ...mocha[0],
  },
];
