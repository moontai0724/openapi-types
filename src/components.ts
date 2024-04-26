import type { Extendable } from "./_extendable";
import type { CallbackObject } from "./callback";
import type { ExampleObject } from "./example";
import type { HeaderObject } from "./header";
import type { AnyLinkObject } from "./link";
import type { AnyParameterObject } from "./parameter";
import type { PathItemObject } from "./path-item";
import type { ReferenceObject } from "./reference";
import type { RequestBodyObject } from "./request-body";
import type { ResponseObject } from "./response";
import type { SchemaObject } from "./schema";
import type { AnySecuritySchemeObject } from "./security-scheme";

/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects
 * defined within the components object will have no effect on the API unless
 * they are explicitly referenced from properties outside the components object.
 *
 * All the fixed fields declared above are objects that _MUST_ use keys that
 * match the regular expression: `^[a-zA-Z0-9\.\-_]+$`.
 *
 * @see https://spec.openapis.org/oas/latest.html#components-object
 */
export interface ComponentsObject extends Extendable {
  /**
   * An object to hold reusable [Schema
   * Objects](https://spec.openapis.org/oas/latest.html#schema-object).
   */
  schemas?: Record<string, SchemaObject>;
  /**
   * An object to hold reusable [Response
   * Objects](https://spec.openapis.org/oas/latest.html#response-object).
   */
  responses?: Record<string, ResponseObject | ReferenceObject>;
  /**
   * An object to hold reusable [Parameter
   * Objects](https://spec.openapis.org/oas/latest.html#parameter-object).
   */
  parameters?: Record<string, AnyParameterObject | ReferenceObject>;
  /**
   * An object to hold reusable [Example
   * Objects](https://spec.openapis.org/oas/latest.html#example-object).
   */
  examples?: Record<string, ExampleObject | ReferenceObject>;
  /**
   * An object to hold reusable [Request Body
   * Objects](https://spec.openapis.org/oas/latest.html#request-body-object).
   */
  requestBodies?: Record<string, RequestBodyObject | ReferenceObject>;
  /**
   * An object to hold reusable [Header
   * Objects](https://spec.openapis.org/oas/latest.html#header-object).
   */
  headers?: Record<string, HeaderObject | ReferenceObject>;
  /**
   * An object to hold reusable [Security Scheme
   * Objects](https://spec.openapis.org/oas/latest.html#security-scheme-object).
   */
  securitySchemes?: Record<string, AnySecuritySchemeObject | ReferenceObject>;
  /**
   * An object to hold reusable [Link
   * Objects](https://spec.openapis.org/oas/latest.html#link-object).
   */
  links?: Record<string, AnyLinkObject | ReferenceObject>;
  /**
   * An object to hold reusable [Callback
   * Objects](https://spec.openapis.org/oas/latest.html#callback-object).
   */
  callbacks?: Record<string, CallbackObject | ReferenceObject>;
  /**
   * An object to hold reusable [Path Item
   * Object](https://spec.openapis.org/oas/latest.html#path-item-object).
   */
  pathItems?: Record<string, PathItemObject | ReferenceObject>;
}
