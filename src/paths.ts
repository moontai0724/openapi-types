import type { Extendable } from "./_extendable";
import type { PathItemObject } from "./path-item";

/**
 * Holds the relative paths to the individual endpoints and their operations.
 * The path is appended to the URL from the [`Server
 * Object`](https://spec.openapis.org/oas/latest.html#server-object) in order to
 * construct the full URL. The Paths _MAY_ be empty, due to [Access Control List
 * (ACL)
 * constraints](https://spec.openapis.org/oas/latest.html#security-filtering).
 *
 * @see https://spec.openapis.org/oas/latest.html#paths-object
 */
export interface PathsObject extends Extendable {
  /**
   * A relative path to an individual endpoint. The field name _MUST_ begin with
   * a forward slash (`/`). The path is **appended** (no relative URL
   * resolution) to the expanded URL from the [`Server
   * Object`](https://spec.openapis.org/oas/latest.html#server-object)’s `url`
   * field in order to construct the full URL. [Path
   * templating](https://spec.openapis.org/oas/latest.html#path-templating) is
   * allowed. When matching URLs, concrete (non-templated) paths would be
   * matched before their templated counterparts. Templated paths with the same
   * hierarchy but different templated names _MUST NOT_ exist as they are
   * identical. In case of ambiguous matching, it’s up to the tooling to decide
   * which one to use.
   */
  [key: `/${string}`]: PathItemObject;
}
