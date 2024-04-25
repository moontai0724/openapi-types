import type { Extendable } from "./_extendable";
import type {
  OAuthFlowObjectOAuth2AuthorizationCode,
  OAuthFlowObjectOAuth2ClientCredentials,
  OAuthFlowObjectOAuth2Implicit,
  OAuthFlowObjectOAuth2Password,
} from "./oauth-flow";

/**
 * Allows configuration of the supported OAuth Flows.
 *
 * @see https://spec.openapis.org/oas/latest.html#oauth-flows-object
 */
export interface OAuthFlowsObject extends Extendable {
  /**
   * Configuration for the OAuth Implicit flow
   */
  implicit?: OAuthFlowObjectOAuth2Implicit;
  /**
   * Configuration for the OAuth Resource Owner Password flow
   */
  password?: OAuthFlowObjectOAuth2Password;
  /**
   * Configuration for the OAuth Client Credentials flow. Previously called `application` in OpenAPI 2.0.
   */
  clientCredentials?: OAuthFlowObjectOAuth2ClientCredentials;
  /**
   * Configuration for the OAuth Authorization Code flow. Previously called `accessCode` in OpenAPI 2.0.
   */
  authorizationCode?: OAuthFlowObjectOAuth2AuthorizationCode;
}
