import type { Extendable } from "./_extendable";

/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * @see https://spec.openapis.org/oas/latest.html#server-variable-object
 */
export interface ServerVariableObject extends Extendable {
  /**
   * An enumeration of string values to be used if the substitution options are from a limited set. The array _MUST NOT_ be empty.
   */
  enum?: string[];
  /**
   * The default value to use for substitution, which _SHALL_ be sent if an alternate value is _not_ supplied. Note this behavior is different than the [Schema Object’s](https://spec.openapis.org/oas/latest.html#schema-object) treatment of default values, because in those cases parameter values are optional. If the [`enum`](https://spec.openapis.org/oas/latest.html#serverVariableEnum) is defined, the value _MUST_ exist in the enum’s values.
   */
  default: string;
  /**
   * An optional description for the server variable. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich text representation.
   */
  description?: string;
}
