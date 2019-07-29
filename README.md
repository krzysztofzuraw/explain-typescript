# Explain TypeScript

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

This repository contains code for [explain TypeScript](https://explaintypescript.com).

Source files are under `src`. Glossary entries are inside `glossary`.
To this site site I've used [gatsby.js](https://www.gatsbyjs.org/) with [TypeScript](https://www.typescriptlang.org/).

## How to run

Install dependencies:

```shell
npm run install
```

Run development server:

```shell
npm run dev
```

To generate graphQL schema make sure that your dev server is running and use:

```shell
npm run generate
```

To check types use:

```shell
npm run tsc
```

To deploy using now:

```shell
npm run now-build
```
