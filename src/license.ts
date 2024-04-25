import type { Extendable } from "./_extendable";

/**
 * License information for the exposed API.
 *
 * @see https://spec.openapis.org/oas/latest.html#license-object
 */
export interface LicenseObject extends Extendable {
  /**
   * The license name used for the API.
   */
  name: string;
  /**
   * An [SPDX](https://spdx.org/licenses/) license expression for the API. The `identifier` field is mutually exclusive of the `url` field.
   */
  identifier?: string;
  /**
   * A URL to the license used for the API. This _MUST_ be in the form of a URL. The `url` field is mutually exclusive of the `identifier` field.
   */
  url?: string;
}
