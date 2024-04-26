import type { Extendable } from "./_extendable";
import type { ExampleObject } from "./example";
import type { MediaTypeObject } from "./media-type";
import type { ReferenceObject } from "./reference";
import type { SchemaObject } from "./schema";

/**
 * There are four possible parameter locations specified by the `in` field:
 *
 * - path - Used together with [Path Templating](https://spec.openapis.org/oas/latest.html#path-templating), where the parameter value is actually part of the operation’s URL. This does not include the host or base path of the API. For example, in `/items/{itemId}`, the path parameter is `itemId`.
 * - query - Parameters that are appended to the URL. For example, in `/items?id=###`, the query parameter is `id`.
 * - header - Custom headers that are expected as part of the request. Note that \[[RFC7230](https://spec.openapis.org/oas/latest.html#bib-RFC7230)\] states header names are case insensitive.
 * - cookie - Used to pass a specific cookie value to the API.
 *
 * @see https://spec.openapis.org/oas/latest.html#parameter-locations
 */
export type ParameterLocation = "path" | "query" | "header" | "cookie";

/**
 * In order to support common ways of serializing simple parameters, a set of `style` values are defined.
 *
 * @see https://spec.openapis.org/oas/latest.html#style-values
 */
export type ParameterStyle =
  | "matrix"
  | "label"
  | "form"
  | "simple"
  | "spaceDelimited"
  | "pipeDelimited"
  | "deepObject";

export interface BaseParameterObject extends Extendable {
  /**
   * The name of the parameter. Parameter names are _case sensitive_.
   *
   * - If [`in`](https://spec.openapis.org/oas/latest.html#parameterIn) is `"path"`, the `name` field _MUST_ correspond to a template expression occurring within the [path](https://spec.openapis.org/oas/latest.html#pathsPath) field in the [Paths Object](https://spec.openapis.org/oas/latest.html#paths-object). See [Path Templating](https://spec.openapis.org/oas/latest.html#path-templating) for further information.
   * - If [`in`](https://spec.openapis.org/oas/latest.html#parameterIn) is `"header"` and the `name` field is `"Accept"`, `"Content-Type"` or `"Authorization"`, the parameter definition _SHALL_ be ignored.
   * - For all other cases, the `name` corresponds to the parameter name used by the [`in`](https://spec.openapis.org/oas/latest.html#parameterIn) property.
   */
  name: string;
  /**
   * The location of the parameter. Possible values are `"query"`, `"header"`, `"path"` or `"cookie"`.
   */
  in: ParameterLocation;
  /**
   * A brief description of the parameter. This could contain examples of use. [CommonMark syntax](https://spec.commonmark.org/) _MAY_ be used for rich text representation.
   */
  description?: string;
  /**
   * Determines whether this parameter is mandatory. If the [parameter location](https://spec.openapis.org/oas/latest.html#parameterIn) is `"path"`, this property is **_REQUIRED_** and its value _MUST_ be `true`. Otherwise, the property _MAY_ be included and its default value is `false`.
   */
  required?: boolean;
  /**
   * Specifies that a parameter is deprecated and _SHOULD_ be transitioned out of usage. Default value is `false`.
   */
  deprecated?: boolean;
  /**
   * Sets the ability to pass empty-valued parameters. This is valid only for `query` parameters and allows sending a parameter with an empty value. Default value is `false`. If [`style`](https://spec.openapis.org/oas/latest.html#parameterStyle) is used, and if behavior is `n/a` (cannot be serialized), the value of `allowEmptyValue` _SHALL_ be ignored. Use of this property is _NOT RECOMMENDED_, as it is likely to be removed in a later revision.
   */
  allowEmptyValue?: boolean;

  /**
   * Describes how the parameter value will be serialized depending on the type of the parameter value. Default values (based on value of `in`): for `query` - `form`; for `path` - `simple`; for `header` - `simple`; for `cookie` - `form`.
   */
  style?: ParameterStyle;
  /**
   * When this is true, parameter values of type `array` or `object` generate separate parameters for each value of the array or key-value pair of the map. For other types of parameters this property has no effect. When [`style`](https://spec.openapis.org/oas/latest.html#parameterStyle) is `form`, the default value is `true`. For all other styles, the default value is `false`.
   */
  explode?: boolean;
  /**
   * Determines whether the parameter value _SHOULD_ allow reserved characters, as defined by \[[RFC3986](https://spec.openapis.org/oas/latest.html#bib-RFC3986)\] `:/?#[]@!$&'()*+,;=` to be included without percent-encoding. This property only applies to parameters with an `in` value of `query`. The default value is `false`.
   */
  allowReserved?: boolean;
  /**
   * The schema defining the type used for the parameter.
   */
  schema?: SchemaObject;
  /**
   * Example of the parameter’s potential value. The example _SHOULD_ match the specified schema and encoding properties if present. The `example` field is mutually exclusive of the `examples` field. Furthermore, if referencing a `schema` that contains an example, the `example` value _SHALL_ _override_ the example provided by the schema. To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.
   */
  example?: any;
  /**
   * Examples of the parameter’s potential value. Each example _SHOULD_ contain a value in the correct format as specified in the parameter encoding. The `examples` field is mutually exclusive of the `example` field. Furthermore, if referencing a `schema` that contains an example, the `examples` value _SHALL_ _override_ the example provided by the schema.
   */
  examples?: Record<string, ExampleObject | ReferenceObject>;

  /**
   * A map containing the representations for the parameter. The key is the media type and the value describes it. The map _MUST_ only contain one entry.
   */
  content?: Record<string, MediaTypeObject>;
}

/**
 * The rules for serialization of the parameter are specified in one of two ways. For simpler scenarios, a [`schema`](https://spec.openapis.org/oas/latest.html#parameterSchema) and [`style`](https://spec.openapis.org/oas/latest.html#parameterStyle) can describe the structure and syntax of the parameter. A parameter _MUST_ contain either a `schema` property, or a `content` property, but not both. When `example` or `examples` are provided in conjunction with the `schema` object, the example _MUST_ follow the prescribed serialization strategy for the parameter.
 */
interface WithSchema extends Pick<BaseParameterObject, "schema" | "content"> {
  schema: SchemaObject;
  content?: never;
}

/**
 * The rules for serialization of the parameter are specified in one of two ways. For more complex scenarios, the [`content`](https://spec.openapis.org/oas/latest.html#parameterContent) property can define the media type and schema of the parameter. A parameter _MUST_ contain either a `schema` property, or a `content` property, but not both. When `example` or `examples` are provided in conjunction with the `schema` object, the example _MUST_ follow the prescribed serialization strategy for the parameter.
 */
interface WithContent extends Pick<BaseParameterObject, "schema" | "content"> {
  content: Record<string, MediaTypeObject>;
  schema?: never;
}

export type ParameterObject =
  | (BaseParameterObject & WithSchema)
  | (BaseParameterObject & WithContent);

export type PathParameterStyle = "matrix" | "label" | "simple";

interface BasePathParameterObject extends BaseParameterObject {
  in: "path";
  /**
   * @default "simple"
   */
  style?: PathParameterStyle;
  required: true;
  allowEmptyValue?: never;
}

export type PathParameterObject =
  | (BasePathParameterObject & WithSchema)
  | (BasePathParameterObject & WithContent);

export type QueryParameterStyle =
  | "form"
  | "spaceDelimited"
  | "pipeDelimited"
  | "deepObject";

export interface BaseQueryParameterObject extends BaseParameterObject {
  in: "query";
  /**
   * @default "form"
   */
  style?: QueryParameterStyle;
}

export type QueryParameterObject =
  | (BaseQueryParameterObject & WithSchema)
  | (BaseQueryParameterObject & WithContent);

export type HeaderParameterStyle = "simple";

export interface BaseHeaderParameterObject extends BaseParameterObject {
  in: "header";
  style?: HeaderParameterStyle;
  allowEmptyValue?: never;
}

export type HeaderParameterObject =
  | (BaseHeaderParameterObject & WithSchema)
  | (BaseHeaderParameterObject & WithContent);

export type CookieParameterStyle = "form";

export interface BaseCookieParameterObject extends BaseParameterObject {
  in: "cookie";
  style?: CookieParameterStyle;
  allowEmptyValue?: never;
}

export type CookieParameterObject =
  | (BaseCookieParameterObject & WithSchema)
  | (BaseCookieParameterObject & WithContent);

export type AnyParameterObject =
  | BasePathParameterObject
  | BaseQueryParameterObject
  | BaseHeaderParameterObject
  | BaseCookieParameterObject;
