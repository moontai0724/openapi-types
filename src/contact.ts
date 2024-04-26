import type { Extendable } from "./_extendable";

/**
 * Contact information for the exposed API.
 *
 * @see https://spec.openapis.org/oas/latest.html#contact-object
 */
export interface ContactObject extends Extendable {
  /**
   * The identifying name of the contact person/organization.
   */
  name?: string;
  /**
   * The URL pointing to the contact information. This MUST be in the form of a
   * URL.
   */
  url?: string;
  /**
   * The email address of the contact person/organization. This _MUST_ be in the
   * form of an email address.
   */
  email?: string;
}
