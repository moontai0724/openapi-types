import type { Extendable } from "./_extendable";

export interface OAuthFlowObject extends Extendable {
  /**
   * The URL to be used for obtaining refresh tokens. This _MUST_ be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refreshUrl?: string;
  /**
   * The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map _MAY_ be empty.
   */
  scopes: Record<string, string>;
  /**
   * The authorization URL to be used for this flow. This _MUST_ be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  authorizationUrl?: string;
  /**
   * The token URL to be used for this flow. This _MUST_ be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  tokenUrl?: string;
}

interface WithAuthorizationUrl
  extends Required<Pick<OAuthFlowObject, "authorizationUrl">> {}

interface WithTokenUrl extends Required<Pick<OAuthFlowObject, "tokenUrl">> {}

export interface OAuthFlowObjectOAuth2Implicit
  extends Omit<OAuthFlowObject, keyof WithAuthorizationUrl>,
    WithAuthorizationUrl {}

export interface OAuthFlowObjectOAuth2Password
  extends Omit<OAuthFlowObject, keyof WithTokenUrl>,
    WithTokenUrl {}

export interface OAuthFlowObjectOAuth2ClientCredentials
  extends Omit<OAuthFlowObject, keyof WithTokenUrl>,
    WithTokenUrl {}

export interface OAuthFlowObjectOAuth2AuthorizationCode
  extends Omit<
      OAuthFlowObject,
      keyof WithAuthorizationUrl | keyof WithTokenUrl
    >,
    WithAuthorizationUrl,
    WithTokenUrl {}

/**
 * @see https://spec.openapis.org/oas/latest.html#oauth-flow-object
 */
export type AnyOAuthFlowObject =
  | OAuthFlowObjectOAuth2Implicit
  | OAuthFlowObjectOAuth2Password
  | OAuthFlowObjectOAuth2ClientCredentials
  | OAuthFlowObjectOAuth2AuthorizationCode;
