import type { Extendable } from "./_extendable";
import type { OperationObject } from "./operation";
import type { AnyParameterObject } from "./parameter";
import type { ReferenceObject } from "./reference";
import type { ServerObject } from "./server";

/**
 * Describes the operations available on a single path. A Path Item _MAY_ be
 * empty, due to [ACL
 * constraints](https://spec.openapis.org/oas/latest.html#security-filtering).
 * The path itself is still exposed to the documentation viewer but they will
 * not know which operations and parameters are available.
 *
 * @see https://spec.openapis.org/oas/latest.html#path-item-object
 */
export interface PathItemObject extends Extendable {
  /**
   * Allows for a referenced definition of this path item. The referenced
   * structure _MUST_ be in the form of a [Path Item
   * Object](https://spec.openapis.org/oas/latest.html#path-item-object). In
   * case a Path Item Object field appears both in the defined object and the
   * referenced object, the behavior is undefined. See the rules for resolving
   * [Relative
   * References](https://spec.openapis.org/oas/latest.html#relative-references-in-uris).
   */
  $ref?: string;
  /**
   * An optional, string summary, intended to apply to all operations in this
   * path.
   */
  summary?: string;
  /**
   * An optional, string description, intended to apply to all operations in
   * this path. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used
   * for rich text representation.
   */
  description?: string;
  /**
   * A definition of a GET operation on this path.
   */
  get?: OperationObject;
  /**
   * A definition of a PUT operation on this path.
   */
  put?: OperationObject;
  /**
   * A definition of a POST operation on this path.
   */
  post?: OperationObject;
  /**
   * A definition of a DELETE operation on this path.
   */
  delete?: OperationObject;
  /**
   * A definition of an OPTIONS operation on this path.
   */
  options?: OperationObject;
  /**
   * A definition of a HEAD operation on this path.
   */
  head?: OperationObject;
  /**
   * A definition of a PATCH operation on this path.
   */
  patch?: OperationObject;
  /**
   * A definition of a TRACE operation on this path.
   */
  trace?: OperationObject;
  /**
   * An alternative `server` array to service all operations in this path.
   */
  servers?: ServerObject[];
  /**
   * A list of parameters that are applicable for all the operations described
   * under this path. These parameters can be overridden at the operation level,
   * but cannot be removed there. The list _MUST NOT_ include duplicated
   * parameters. A unique parameter is defined by a combination of a
   * [name](https://spec.openapis.org/oas/latest.html#parameterName) and
   * [location](https://spec.openapis.org/oas/latest.html#parameterIn). The list
   * can use the [Reference
   * Object](https://spec.openapis.org/oas/latest.html#reference-object) to link
   * to parameters that are defined at the [OpenAPI Object’s
   * components/parameters](https://spec.openapis.org/oas/latest.html#componentsParameters).
   */
  parameters?: (AnyParameterObject | ReferenceObject)[];
}
