import type { Extendable } from "./_extendable";

/**
 * In all cases, the example value is expected to be compatible with the type schema of its associated value. Tooling implementations _MAY_ choose to validate compatibility automatically, and reject the example value(s) if incompatible.
 *
 * @see https://spec.openapis.org/oas/latest.html#example-object
 */
export interface ExampleObject extends Extendable {
  /**
   * Short description for the example.
   */
  summary?: string;
  /**
   * Long description for the example. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich text representation.
   */
  description?: string;
  /**
   * Embedded literal example. The `value` field and `externalValue` field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.
   */
  value?: any;
  /**
   * A URI that points to the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The `value` field and `externalValue` field are mutually exclusive. See the rules for resolving [Relative References](https://spec.openapis.org/oas/latest.html#relative-references-in-uris).
   */
  externalValue?: string;
}
