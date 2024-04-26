/**
 * While the OpenAPI Specification tries to accommodate most use cases,
 * additional data can be added to extend the specification at certain points.
 *
 * The extensions properties are implemented as patterned fields that are always
 * prefixed by `"x-"`.
 *
 * The extensions may or may not be supported by the available tooling, but
 * those may be extended as well to add requested support (if tools are internal
 * or open-sourced).
 *
 * @see https://spec.openapis.org/oas/latest.html#specification-extensions
 */
export interface Extendable {
  /**
   * Allows extensions to the OpenAPI Schema. The field name _MUST_ begin with
   * `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and
   * `x-oas-` are reserved for uses defined by the [OpenAPI
   * Initiative](https://www.openapis.org/). The value can be `null`, a
   * primitive, an array or an object.
   */
  [key: `x-${string}`]: any;
  [key: `x-oai-${string}`]: never;
  [key: `x-oas-${string}`]: never;
}
