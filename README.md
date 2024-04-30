# @moontai0724/openapi-types

[![NPM Version](https://img.shields.io/npm/v/@moontai0724/openapi-types)](https://www.npmjs.com/package/@moontai0724/openapi-types)
[![NPM Downloads](https://img.shields.io/npm/d18m/@moontai0724/openapi-types)](https://www.npmjs.com/package/@moontai0724/openapi-types)

TypeScript types for [OpenAPI](https://www.openapis.org/) specification.

Currently, this package only supports OpenAPI v3.1.

## Install

### NPM

```bash
npm install -D @moontai0724/openapi-types
```

### Yarn

```bash
yarn add -D @moontai0724/openapi-types
```

### PNPM

```bash
pnpm add -D @moontai0724/openapi-types
```

## Usage

```typescript
import type {
  OpenAPIObject,
  OperationObject,
} from "@moontai0724/openapi-types";

const openapi: OpenAPIObject = {
  openapi: "3.0.0",
  // ...
};

const operation: OperationObject = {
  // ...
};
```

## API Document

See the [API documentation](https://moontai0724.github.io/openapi-types/).
