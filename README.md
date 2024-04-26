# @moontaiworks/openapi-types

[![NPM Version](https://img.shields.io/npm/v/@moontaiworks/openapi-types)](https://www.npmjs.com/package/@moontaiworks/openapi-types)
[![NPM Downloads](https://img.shields.io/npm/d18m/@moontaiworks/openapi-types)](https://www.npmjs.com/package/@moontaiworks/openapi-types)

TypeScript types for [OpenAPI](https://www.openapis.org/) specification.

Currently, this package only supports OpenAPI v3.1.

## Install

### NPM

```bash
npm install -d @moontaiworks/openapi-types
```

### Yarn

```bash
yarn add -d @moontaiworks/openapi-types
```

### PNPM

```bash
pnpm add -d @moontaiworks/openapi-types
```

## Usage

```typescript
import type {
  OpenAPIObject,
  OperationObject,
} from "@moontaiworks/openapi-types";

const openapi: OpenAPIObject = {
  openapi: "3.0.0",
  // ...
};

const operation: OperationObject = {
  // ...
};
```

## API Document

See the [API documentation](https://moontaiworks.github.io/openapi-types/).
