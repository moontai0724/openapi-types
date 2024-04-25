/**
 * Lists the required security schemes to execute this operation. The name used for each property _MUST_ correspond to a security scheme declared in the [Security Schemes](https://spec.openapis.org/oas/latest.html#componentsSecuritySchemes) under the [Components Object](https://spec.openapis.org/oas/latest.html#components-object).
 *
 * Security Requirement Objects that contain multiple schemes require that all schemes _MUST_ be satisfied for a request to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.
 *
 * When a list of Security Requirement Objects is defined on the [OpenAPI Object](https://spec.openapis.org/oas/latest.html#openapi-object) or [Operation Object](https://spec.openapis.org/oas/latest.html#operation-object), only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.
 *
 * @see https://spec.openapis.org/oas/latest.html#security-requirement-object
 */
export interface SecurityRequirementObject {
  /**
   * Each name _MUST_ correspond to a security scheme which is declared in the [Security Schemes](https://spec.openapis.org/oas/latest.html#componentsSecuritySchemes) under the [Components Object](https://spec.openapis.org/oas/latest.html#components-object). If the security scheme is of type `"oauth2"` or `"openIdConnect"`, then the value is a list of scope names required for the execution, and the list _MAY_ be empty if authorization does not require a specified scope. For other security scheme types, the array _MAY_ contain a list of role names which are required for the execution, but are not otherwise defined or exchanged in-band.
   */
  [key: string]: any[];
}
