import type { OpenAPIObject } from "index";
import { expectError } from "tsd";

expectError<OpenAPIObject>({
  openapi: "3.1.0",
  // this example should fail as overlays is not a valid top-level object/keyword
  info: {
    title: "API",
    version: "1.0.0",
  },
  overlays: {},
});
