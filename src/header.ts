import type { HeaderParameterObject } from "./parameter";

/**
 * @see https://spec.openapis.org/oas/latest.html#header-object
 */
export interface HeaderObject
  extends Omit<HeaderParameterObject, "name" | "in"> {}
