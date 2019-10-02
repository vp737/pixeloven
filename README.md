# PixelOven Framework
This project is a `mono-repo` designed to contain several packages that in combination make up the ***PixelOven Framework***. Below are instructions on how to contribute to this project as well as directions on how to integrate each individual package into existing projects. 

[![CircleCI](https://circleci.com/gh/pixeloven/pixeloven/tree/master.svg?style=svg)](https://circleci.com/gh/pixeloven/pixeloven/tree/master)
[![Coverage Status](https://codecov.io/gh/pixeloven/pixeloven/branch/master/graph/badge.svg)](https://codecov.io/gh/pixeloven/pixeloven)
[![Dev Dependencies](https://david-dm.org/pixeloven/pixeloven/dev-status.svg)](https://david-dm.org/pixeloven/pixeloven?type=dev)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/briangebel)

## Table of Contents

- [Requirements](#requirements)
- [Integration](#integration)
- [Contribution](#contribution)
- [Features](#features)
- [Improvements](#improvements)
- [Our Commitment](#our-commitment)

## Requirements
This project has the following requirements for development. Keep in mind that the versions provided are a recommendation while other versions may be compatible they are untested.
- Node >= `8.0.0` 
- Yarn >= `1.0.0`

## Integration

> ***TBD*** Link to each package here.

For existing projects please review our [integration guide](./integration.md) for more details.

## Contribution

> ***TBD*** Link to template directory with instructions for creating new template.

This project was born from a small collective effort within ***GoFundMe*** with the purpose to abstract common configuration and infrastructure used in the creation of *isomorphic* React applications. However, for this project to be even more successful we need your help. **Join us and start coding!** :heart:

Please consider reviewing our [contribution guide](./contribution.md) for more details.

## Features

> ***TBD*** Add feature summary plus below might be inaccurate

### Git Hooks

There is already set a `precommit` hook for formatting your code with Prettier :nail_care:

By default, there are two disabled git hooks. They're set up when you run the `npm run semantic-release-prepare` script. They make sure:
 - You follow a [conventional commit message](https://github.com/conventional-changelog/conventional-changelog)
 - Your build is not going to fail in [Travis](https://travis-ci.org) (or your CI server), since it's run locally before `git push`

This makes more sense in combination with [automatic releases](#automatic-releases).

## Improvements
Below are just some of the up coming ideas for improvements.
* Review this [starter](https://github.com/bitjson/typescript-starter) and [this one](https://github.com/alexjoverm/typescript-library-starter) for trending ideas.
* Should look into [tslint-immutable](https://www.npmjs.com/package/tslint-immutable)
* Add better typings for all packages but especially `docs`
* Update package readmes
* Integrate TypeDocs with story book and for this repo
* Clean up deps across all packages
* Improve [Offline](https://github.com/NekR/offline-plugin/issues/64) Support of dynamic urls
* Create generator for new package
* Create generator for new starter based on demo app.
* Docker/CI support for open browser. (don't)
* Load env for storybook too.
* handle precommit for each package https://github.com/sudo-suhas/lint-staged-multi-pkg
* https://github.com/atlassian/lerna-semantic-release

## Our Commitment
We are committed to providing a safe place for everyone. Please review our [code of conduct guidelines](./code-of-conduct.md) to help us with our commitment. Thank you!

## Planned v6 Release
* Restructure with scoped namespaces. Also create a deprecated section so we can redirect people.
* Restructure examples. Name apps and create one example and one for pixeloven.com
* Cleanup deps and move functions into core & add tests
* Abstract some shared app deps and what not to other packages (they can remain private for now)
* Restructure and fix example into smaller parts
* Custom commit CLI addon with linting and features to help aid mono repos
* Break middleware up into smaller packages
* Remove semantic UI deps in main example and replace with a more accesible option
* Document everything and host storybook, docs, etc

## After v6 Release
* Unify all logging and make json logging a thing
* Remove react-dev-utils
* Add help to CLI and documentation
* Reach 90-100% test coverage
* node-mocks-http replace with supertest
* Make client/server compilation configurable
* Audit deps/build and make sure it passes without critical
* Add static site generation support
* Add support for PWA
* Create a unified configuration (perhaps an addon?) for the CLI
* Create a env addon for the CLI for those who wish to pull .env from a file (based on @env)
* Create our own all in one dashboard like Jarvis + BundleAnalyzerPlugin + console (read only)
* PixelOven site with coverage, storybook, etc all hosted with a unified theme.