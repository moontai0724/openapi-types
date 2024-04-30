import type { OpenAPIObject } from "index";
import { expectAssignable } from "tsd";

expectAssignable<OpenAPIObject>({
  openapi: "3.1.1",
  info: {
    title: "API",
    version: "1.0.0",
  },
  components: {
    schemas: {
      anything_boolean: true,
      nothing_boolean: false,
      anything_object: {},
      nothing_object: {
        not: {},
      },
    },
  },
});
