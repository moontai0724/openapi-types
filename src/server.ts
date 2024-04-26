import type { Extendable } from "./_extendable";
import type { ServerVariableObject } from "./server-variable";

/**
 * An object representing a Server.
 *
 * @see https://spec.openapis.org/oas/latest.html#server-object
 */
export interface ServerObject extends Extendable {
  /**
   * A URL to the target host. This URL supports Server Variables and _MAY_ be
   * relative, to indicate that the host location is relative to the location
   * where the OpenAPI document is being served. Variable substitutions will be
   * made when a variable is named in `{`brackets`}`.
   */
  url: string;
  /**
   * An optional string describing the host designated by the URL. [CommonMark
   * syntax](https://spec.commonmark.org/) _MAY_ be used for rich text
   * representation.
   */
  description?: string;
  /**
   * A map between a variable name and its value. The value is used for
   * substitution in the server’s URL template.
   */
  variables?: Record<string, ServerVariableObject>;
}
