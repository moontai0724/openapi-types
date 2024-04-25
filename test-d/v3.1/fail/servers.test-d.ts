import type { OpenAPIObject } from "index";
import { expectError } from "tsd";

expectError<OpenAPIObject>({
  openapi: "3.1.0",
  // this example should fail, as servers must be an array, not an object
  info: {
    title: "API",
    version: "1.0.0",
  },
  paths: {},
  servers: {
    url: "/v1",
    description: "Run locally.",
  },
});
