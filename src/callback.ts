import type { Extendable } from "./_extendable";
import type { PathItemObject } from "./path-item";
import type { ReferenceObject } from "./reference";

/**
 * A map of possible out-of band callbacks related to the parent operation. Each
 * value in the map is a [Path Item
 * Object](https://spec.openapis.org/oas/latest.html#path-item-object) that
 * describes a set of requests that may be initiated by the API provider and the
 * expected responses. The key value used to identify the path item object is an
 * expression, evaluated at runtime, that identifies a URL to use for the
 * callback operation.
 *
 * To describe incoming requests from the API provider independent from another
 * API call, use the
 * [`webhooks`](https://spec.openapis.org/oas/latest.html#oasWebhooks) field.
 *
 * @see https://spec.openapis.org/oas/latest.html#callback-object
 */
export interface CallbackObject extends Extendable {
  /**
   * A Path Item Object, or a reference to one, used to define a callback
   * request and expected responses. A [complete
   * example](https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v3.0/callback-example.yaml)
   * is available.
   */
  [key: string]: PathItemObject | ReferenceObject;
}
