import type { Extendable } from "./_extendable";
import type { ExternalDocumentationObject } from "./external-documentation";

/**
 * Adds metadata to a single tag that is used by the [Operation Object](https://spec.openapis.org/oas/latest.html#operation-object). It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * @see https://spec.openapis.org/oas/latest.html#tag-object
 */
export interface TagObject extends Extendable {
  /**
   * The name of the tag.
   */
  name: string;
  /**
   * A description for the tag. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich text representation.
   */
  description?: string;
  /**
   * Additional external documentation for this tag.
   */
  externalDocs?: ExternalDocumentationObject;
}
