import type { Extendable } from "./_extendable";
import type { ServerObject } from "./server";

/**
 * The `Link object` represents a possible design-time link for a response. The presence of a link does not guarantee the caller’s ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
 *
 * Unlike _dynamic_ links (i.e. links provided **in** the response payload), the OAS linking mechanism does not require link information in the runtime response.
 *
 * For computing links, and providing instructions to execute them, a [runtime expression](https://spec.openapis.org/oas/latest.html#runtime-expressions) is used for accessing values in an operation and using them as parameters while invoking the linked operation.
 *
 * A linked operation _MUST_ be identified using either an `operationRef` or `operationId`. In the case of an `operationId`, it _MUST_ be unique and resolved in the scope of the OAS document. Because of the potential for name clashes, the `operationRef` syntax is preferred for OpenAPI documents with external references.
 *
 * @see https://spec.openapis.org/oas/latest.html#link-object
 */
export interface BaseLinkObject extends Extendable {
  /**
   * A relative or absolute URI reference to an OAS operation. This field is mutually exclusive of the `operationId` field, and _MUST_ point to an [Operation Object](https://spec.openapis.org/oas/latest.html#operation-object). Relative `operationRef` values _MAY_ be used to locate an existing [Operation Object](https://spec.openapis.org/oas/latest.html#operation-object) in the OpenAPI definition. See the rules for resolving [Relative References](https://spec.openapis.org/oas/latest.html#relative-references-in-uris).
   */
  operationRef?: string;
  /**
   * The name of an _existing_, resolvable OAS operation, as defined with a unique `operationId`. This field is mutually exclusive of the `operationRef` field.
   */
  operationId?: string;
  /**
   * A map representing parameters to pass to an operation as specified with `operationId` or identified via `operationRef`. The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the [parameter location](https://spec.openapis.org/oas/latest.html#parameterIn) `[{in}.]{name}` for operations that use the same parameter name in different locations (e.g. [path.id](http://path.id/)).
   */
  parameters?: Record<string, any>;
  /**
   * A literal value or [{expression}](https://spec.openapis.org/oas/latest.html#runtime-expressions) to use as a request body when calling the target operation.
   */
  requestBody?: any;
  /**
   * A description of the link. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich text representation.
   */
  description?: string;
  /**
   * A server object to be used by the target operation.
   */
  server?: ServerObject;
}

interface WithRef extends BaseLinkObject {
  operationRef: string;
  operationId?: never;
}

interface WithId extends BaseLinkObject {
  operationId: string;
  operationRef?: never;
}

/**
 * The `Link object` represents a possible design-time link for a response. The presence of a link does not guarantee the caller’s ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
 *
 * Unlike _dynamic_ links (i.e. links provided **in** the response payload), the OAS linking mechanism does not require link information in the runtime response.
 *
 * For computing links, and providing instructions to execute them, a [runtime expression](https://spec.openapis.org/oas/latest.html#runtime-expressions) is used for accessing values in an operation and using them as parameters while invoking the linked operation.
 *
 * @see https://spec.openapis.org/oas/latest.html#link-object
 */
export type LinkObject = WithRef | WithId;
