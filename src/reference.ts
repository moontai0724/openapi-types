/**
 * A simple object to allow referencing other components in the OpenAPI document, internally and externally.
 *
 * The `$ref` string value contains a URI \[[RFC3986](https://spec.openapis.org/oas/latest.html#bib-RFC3986)\], which identifies the location of the value being referenced.
 *
 * See the rules for resolving [Relative References](https://spec.openapis.org/oas/latest.html#relative-references-in-uris).
 *
 * Note that this restriction on additional properties is a difference between Reference Objects and [`Schema Objects`](https://spec.openapis.org/oas/latest.html#schema-object) that contain a `$ref` keyword.
 *
 * @see https://spec.openapis.org/oas/latest.html#reference-object
 */
export interface ReferenceObject {
  /**
   * The reference identifier. This _MUST_ be in the form of a URI.
   */
  $ref: string;
  /**
   * A short summary which by default _SHOULD_ override that of the referenced component. If the referenced object-type does not allow a `summary` field, then this field has no effect.
   */
  summary?: string;
  /**
   * A description which by default _SHOULD_ override that of the referenced component. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich text representation. If the referenced object-type does not allow a `description` field, then this field has no effect.
   */
  description?: string;
}
