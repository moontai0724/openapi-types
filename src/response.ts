import type { Extendable } from "./_extendable";
import type { HeaderObject } from "./header";
import type { AnyLinkObject } from "./link";
import type { MediaTypeObject } from "./media-type";
import type { ReferenceObject } from "./reference";

/**
 * Describes a single response from an API Operation, including design-time,
 * static `links` to operations based on the response.
 *
 * @see https://spec.openapis.org/oas/latest.html#response-object
 */
export interface ResponseObject extends Extendable {
  /**
   * A description of the response. [CommonMark
   * syntax](https://spec.commonmark.org/) _MAY_ be used for rich text
   * representation.
   */
  description: string;
  /**
   * Maps a header name to its definition.
   * \[[RFC7230](https://spec.openapis.org/oas/latest.html#bib-RFC7230)\] states
   * header names are case insensitive. If a response header is defined with the
   * name `"Content-Type"`, it _SHALL_ be ignored.
   */
  headers?: Record<string, HeaderObject | ReferenceObject>;
  /**
   * A map containing descriptions of potential response payloads. The key is a
   * media type or [media type
   * range](https://tools.ietf.org/html/rfc7231#appendix-D) and the value
   * describes it. For responses that match multiple keys, only the most
   * specific key is applicable. e.g. text/plain overrides text/\*
   */
  content?: Record<string, MediaTypeObject>;
  /**
   * A map of operations links that can be followed from the response. The key
   * of the map is a short name for the link, following the naming constraints
   * of the names for [Component
   * Objects](https://spec.openapis.org/oas/latest.html#components-object).
   */
  links?: Record<string, AnyLinkObject | ReferenceObject>;
}
