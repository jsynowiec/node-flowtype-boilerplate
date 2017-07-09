[![Dev dependencies][dependencies-badge]][dependencies]
[![Node.js version][nodejs-badge]][nodejs]
[![NPM version][npm-badge]][npm]
[![Yarn version][yarn-badge]][yarn]
[![Build Status][travis-badge]][travis-ci]

[![MIT License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# glee

Hapi boilerplate with glue, jest, ES6+ (stage-3), build scripts and everything you need to quick-start backend development with Flow type checking.

Provides a basic Rest API template:

+ ES6 + babel,
  + Removes Flow type annotations,
  + Transforms imports to lazy CommonJS requires,
  + Transforms async/await to generators,
+ [ESLint][eslint] with the [airbnb-base][airbnb-base] and [flowtype][eslint-flowtype] rules,
+ [Jest][jest] unit testing and coverage,
+ [Type definitions][flow-typed] for Jest,
+ [NPM scripts for common operations](#available-scripts),
+ [.editorconfig][editorconfig] for consistent file format,
+ [Yarn][yarn] lockfile so only verified and up-to-date dependencies are installed.
+ Guidance for CQRS architecture.

## Quick start

This project requires [Node.js][nodejs] 6.9 (LTS) or later (but should work with any 6.2 or newer release) and [NPM][npm], [Yarn][yarn] is optional but recommended. Make sure you have those installed. Then just type following commands:

```
git clone https://github.com/acklenavenue/glee
cd node-flowtype-boilerplate
yarn
```

or if you don't have yarn installed

```
npm install
```

## Available scripts

Run using either `npm run <script>` or `yarn run <script>` comand.

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `lint` - lint source files and tests,
+ `typecheck` - check type annotations,
+ `test` - lint, typecheck and run tests with coverage,
+ `test-only` - run tests with coverage,
+ `test:watch` - interactive watch mode to automatically re-run tests, 
+ `build` - compile source files,
+ `build:watch` - interactive watch mode, compile sources on change.

## Questions

If you have any questions regarding this project:

* consult the [FAQ][wiki-faq] wiki page first,
* search for [issues marked as *question*][issues-question],
* if none of the above is appropriate, [open an issue][new-issue].

## Inspiration

This boilerplate was initially inspired by [Jakub Synowiec](https://github.com/acklenavenue/glee), but taken several steps further to include a basic Hapi-based REST API with CQRS-style command dispatching.

## License
MIT License. See the [LICENSE](https://github.com/acklenavenue/glee/blob/master/LICENSE) file.

[dependencies-badge]: https://david-dm.org/acklenavenue/glee/dev-status.svg?style=flat-square
[dependencies]: https://david-dm.org/acklenavenue/glee?type=dev
[nodejs-badge]: https://img.shields.io/badge/node->=%206.9.0-blue.svg?style=flat-square
[nodejs]: https://nodejs.org/dist/latest-v6.x/docs/api/
[npm-badge]: https://img.shields.io/badge/npm->=%203.10.8-blue.svg?style=flat-square
[npm]: https://docs.npmjs.com/
[yarn-badge]: https://img.shields.io/badge/yarn->=%200.19.0-blue.svg?style=flat-square
[yarn]: https://yarnpkg.com
[travis-badge]: https://travis-ci.org/acklenavenue/glee.svg?branch=master
[travis-ci]: https://travis-ci.org/acklenavenue/glee
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/acklenavenue/glee/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/acklenavenue/glee.svg?style=social
[github-watch]: https://github.com/acklenavenue/glee/watchers
[github-star-badge]: https://img.shields.io/github/stars/acklenavenue/glee.svg?style=social
[github-star]: https://github.com/acklenavenue/glee/stargazers
[jest]: https://facebook.github.io/jest/

[flowtype]: https://flowtype.org/
[eslint]: http://eslint.org/
[airbnb-base]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
[eslint-flowtype]: https://www.npmjs.com/package/eslint-plugin-flowtype
[yarn]: https://github.com/yarnpkg/yarn
[flow-typed]: https://github.com/flowtype/flow-typed
[editorconfig]: https://github.com/acklenavenue/glee/blob/master/.editorconfig

[new-issue]: https://github.com/acklenavenue/glee/issues/new
[issues-question]: https://github.com/acklenavenue/glee/issues?utf8=✓&q=label%3Aquestion%20