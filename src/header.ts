import type { BaseHeaderParameterObject } from "./parameter";

/**
 * @see https://spec.openapis.org/oas/latest.html#header-object
 */
export interface HeaderObject
  extends Omit<BaseHeaderParameterObject, "name" | "in"> {}
