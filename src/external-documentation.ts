import type { Extendable } from "./_extendable";

/**
 * Allows referencing an external resource for extended documentation.
 *
 * @see https://spec.openapis.org/oas/latest.html#external-documentation-object
 */
export interface ExternalDocumentationObject extends Extendable {
  /**
   * A description of the target documentation. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich text representation.
   */
  description?: string;
  /**
   * The URL for the target documentation. This _MUST_ be in the form of a URL.
   */
  url: string;
}
