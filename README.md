# Serverless Webpack Monorepo Typescript Starter

Heavily inspired on this repo: https://github.com/tommedema/serverless-mono-example . This example showcases a monorepo setup for Serverless applications in Typescript using Yarn Workspaces and Webpack. The Lambda integrates with [Prisma](https://github.com/prisma/prisma) to demonstrate forcefully including packages that cannot be bundled by Webpack. It works by preventing these dependencies to be hoisted to the root folder, by adding them to Yarn's `nohoist` (see `package.json`).

## Stack

- Typescript (with references)
- Lerna
- Yarn Workspaces
- Serverless Framework
- Webpack
- Prisma (database)

## Install & Build

Everything from the root folder.

```sh
yarn install
yarn build
```

## Features

- Testing from the root folder and in individual packages.
- Deployments from the root folder and in individual packages.
- Webpack bundling. Example showcases forcefully including packages that are not compatible with Webpack, such as `Prisma` or `knex.js`.
- Automatic prettier and linting via Husky.

### Test

Run tests for all packages by simply running `yarn test`, or run them individually by navigating to a package.

```sh
yarn test
```

### Deploy

Deploy all Lambda's from the root folder or individually by navigating to a package.

```sh
yarn deploy
```

### Exclude more dependencies for bundling

Prisma generates Typescript definitions and a Prisma engine. This Prisma engine is a direct interface to the database. These files cannot be bundled by Webpack and should therefore be excluded. Other dependencies can be added or removed by adding them to the `nohoist` option in the `package.json` file.
