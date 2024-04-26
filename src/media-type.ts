import type { Extendable } from "./_extendable";
import type { EncodingObject } from "./encoding";
import type { ExampleObject } from "./example";
import type { ReferenceObject } from "./reference";
import type { SchemaObject } from "./schema";

/**
 * Each Media Type Object provides schema and examples for the media type
 * identified by its key.
 *
 * @see https://spec.openapis.org/oas/latest.html#media-type-object
 */
export interface MediaTypeObject extends Extendable {
  /**
   * The schema defining the content of the request, response, or parameter.
   */
  schema?: SchemaObject;
  /**
   * Example of the media type. The example object _SHOULD_ be in the correct
   * format as specified by the media type. The `example` field is mutually
   * exclusive of the `examples` field. Furthermore, if referencing a `schema`
   * which contains an example, the `example` value _SHALL_ _override_ the
   * example provided by the schema.
   */
  example?: any;
  /**
   * Examples of the media type. Each example object _SHOULD_ match the media
   * type and specified schema if present. The `examples` field is mutually
   * exclusive of the `example` field. Furthermore, if referencing a `schema`
   * which contains an example, the `examples` value _SHALL_ _override_ the
   * example provided by the schema.
   */
  examples?: Record<string, ExampleObject | ReferenceObject>;
  /**
   * A map between a property name and its encoding information. The key, being
   * the property name, _MUST_ exist in the schema as a property. The encoding
   * object _SHALL_ only apply to `requestBody` objects when the media type is
   * `multipart` or `application/x-www-form-urlencoded`.
   */
  encoding?: Record<string, EncodingObject>;
}
