import type { Extendable } from "./_extendable";
import type { ContactObject } from "./contact";
import type { LicenseObject } from "./license";

/**
 * The object provides metadata about the API. The metadata _MAY_ be used by the clients if needed, and _MAY_ be presented in editing or documentation generation tools for convenience.
 *
 * @see https://spec.openapis.org/oas/latest.html#info-object
 */
export interface InfoObject extends Extendable {
  /**
   * The title of the API.
   */
  title: string;
  /**
   * A short summary of the API.
   */
  summary?: string;
  /**
   * A description of the API. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich text representation.
   */
  description?: string;
  /**
   * A URL to the Terms of Service for the API. This _MUST_ be in the form of a URL.
   */
  termsOfService?: string;
  /**
   * The contact information for the exposed API.
   */
  contact?: ContactObject;
  /**
   * The license information for the exposed API.
   */
  license?: LicenseObject;
  /**
   * The version of the OpenAPI document (which is distinct from the [OpenAPI Specification version](https://spec.openapis.org/oas/latest.html#oasVersion) or the API implementation version).
   */
  version: string;
}
