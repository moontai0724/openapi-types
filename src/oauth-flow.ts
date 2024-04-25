import type { Extendable } from "./_extendable";

interface BaseOAuthFlowObject extends Extendable {
  /**
   * The URL to be used for obtaining refresh tokens. This _MUST_ be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refreshUrl?: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map _MAY_ be empty.
   */
  scopes: Record<string, string>;
}

interface WithAuthorizationUrl {
  /**
   * The authorization URL to be used for this flow. This _MUST_ be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  authorizationUrl: string;
}

interface WithTokenUrl {
  /**
   * The token URL to be used for this flow. This _MUST_ be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  tokenUrl: string;
}

export interface OAuthFlowObjectOAuth2Implicit
  extends BaseOAuthFlowObject,
    WithAuthorizationUrl {}

export interface OAuthFlowObjectOAuth2Password
  extends BaseOAuthFlowObject,
    WithTokenUrl {}

export interface OAuthFlowObjectOAuth2ClientCredentials
  extends BaseOAuthFlowObject,
    WithTokenUrl {}

export interface OAuthFlowObjectOAuth2AuthorizationCode
  extends BaseOAuthFlowObject,
    WithAuthorizationUrl,
    WithTokenUrl {}

/**
 * @see https://spec.openapis.org/oas/latest.html#oauth-flow-object
 */
export type OAuthFlowObject =
  | OAuthFlowObjectOAuth2Implicit
  | OAuthFlowObjectOAuth2Password
  | OAuthFlowObjectOAuth2ClientCredentials
  | OAuthFlowObjectOAuth2AuthorizationCode;
