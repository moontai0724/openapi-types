import type { JSONSchema7, JSONSchema7Definition } from "json-schema";

import type { DiscriminatorObject } from "./discriminator";
import type { ExternalDocumentationObject } from "./external-documentation";
import type { XMLObject } from "./xml";

declare module "json-schema" {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  interface JSONSchema7 {
    /**
     * [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich
     * text representation.
     */
    description?: string;
    /**
     * Adds support for polymorphism. The discriminator is an object name that is
     * used to differentiate between other schemas which may satisfy the payload
     * description. See [Composition and
     * Inheritance](https://spec.openapis.org/oas/latest.html#composition-and-inheritance-polymorphism)
     * for more details.
     */
    discriminator?: DiscriminatorObject;
    /**
     * This _MAY_ be used only on properties schemas. It has no effect on root
     * schemas. Adds additional metadata to describe the XML representation of
     * this property.
     */
    xml?: XMLObject;
    /**
     * Additional external documentation for this schema.
     */
    externalDocs?: ExternalDocumentationObject;
    /**
     * A free-form property to include an example of an instance for this schema.
     * To represent examples that cannot be naturally represented in JSON or YAML,
     * a string value can be used to contain the example with escaping where
     * necessary.
     *
     * @deprecated The `example` property has been deprecated in favor of the JSON
     * Schema `examples` keyword. Use of `example` is discouraged, and later
     * versions of this specification may remove it.
     */
    example?: any;
    /**
     * This object _MAY_ be extended with [Specification
     * Extensions](https://spec.openapis.org/oas/latest.html#specification-extensions),
     * though as noted, additional properties _MAY_ omit the `x-` prefix within
     * this object.
     */
    [key: string]: any;
  }
}

/**
 * The Schema Object allows the definition of input and output data types. These
 * types can be objects, but also primitives and arrays. This object is a
 * superset of the [JSON Schema Specification Draft
 * 2020-12](https://tools.ietf.org/html/draft-bhutton-json-schema-00).
 *
 * For more information about the properties, see [JSON Schema
 * Core](https://tools.ietf.org/html/draft-bhutton-json-schema-00) and [JSON
 * Schema
 * Validation](https://tools.ietf.org/html/draft-bhutton-json-schema-validation-00).
 *
 * Unless stated otherwise, the property definitions follow those of JSON Schema
 * and do not add any additional semantics. Where JSON Schema indicates that
 * behavior is defined by the application (e.g. for annotations), OAS also
 * defers the definition of semantics to the application consuming the OpenAPI
 * document.
 *
 * @see https://spec.openapis.org/oas/latest.html#schema-object
 */
export interface SchemaObject extends JSONSchema7 {}
export type SchemaObjectDefinition = JSONSchema7Definition;
