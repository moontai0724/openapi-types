import type { Extendable } from "./_extendable";
import type { ReferenceObject } from "./reference";
import type { ResponseObject } from "./response";

/**
 * A container for the expected responses of an operation. The container maps a
 * HTTP response code to the expected response.
 *
 * The documentation is not necessarily expected to cover all possible HTTP
 * response codes because they may not be known in advance. However,
 * documentation is expected to cover a successful operation response and any
 * known errors.
 *
 * The `default` _MAY_ be used as a default response object for all HTTP codes
 * that are not covered individually by the `Responses Object`.
 *
 * The `Responses Object` _MUST_ contain at least one response code, and if only
 * one response code is provided it _SHOULD_ be the response for a successful
 * operation call.
 *
 * @see https://spec.openapis.org/oas/latest.html#responses-object
 */
export interface ResponsesObject extends Extendable {
  /**
   * The documentation of responses other than the ones declared for specific
   * HTTP response codes. Use this field to cover undeclared responses.
   */
  default?: ResponseObject | ReferenceObject;
  /**
   * Any [HTTP status
   * code](https://spec.openapis.org/oas/latest.html#http-status-codes) can be
   * used as the property name, but only one property per code, to describe the
   * expected response for that HTTP status code. This field _MUST_ be enclosed
   * in quotation marks (for example, “200”) for compatibility between JSON and
   * YAML. To define a range of response codes, this field _MAY_ contain the
   * uppercase wildcard character `X`. For example, `2XX` represents all
   * response codes between `[200-299]`. Only the following range definitions
   * are allowed: `1XX`, `2XX`, `3XX`, `4XX`, and `5XX`. If a response is
   * defined using an explicit code, the explicit code definition takes
   * precedence over the range definition for that code.
   */
  [key: `${number}`]: ResponseObject | ReferenceObject;
}
