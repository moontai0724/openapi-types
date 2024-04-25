import type { OpenAPIObject } from "index";
import { expectError } from "tsd";

expectError<OpenAPIObject>({
  openapi: "3.1.0",
  // this example should fail as there are no paths, components or webhooks containers (at least one of which must be present)
  info: {
    title: "API",
    version: "1.0.0",
  },
});
