import type { Extendable } from "./_extendable";
import type { ComponentsObject } from "./components";
import type { ExternalDocumentationObject } from "./external-documentation";
import type { InfoObject } from "./info";
import type { PathItemObject } from "./path-item";
import type { PathsObject } from "./paths";
import type { ReferenceObject } from "./reference";
import type { SecurityRequirementObject } from "./security-requirement";
import type { ServerObject } from "./server";
import type { TagObject } from "./tag";

/**
 * This is the root object of the [OpenAPI document](https://spec.openapis.org/oas/latest.html#openapi-document).
 * @see https://spec.openapis.org/oas/latest.html#openapi-object
 */
interface BaseOpenAPIObject extends Extendable {
  /**
   * This string _MUST_ be the [version number](https://spec.openapis.org/oas/latest.html#versions) of the OpenAPI Specification that the OpenAPI document uses. The `openapi` field _SHOULD_ be used by tooling to interpret the OpenAPI document. This is _not_ related to the API [`info.version`](https://spec.openapis.org/oas/latest.html#infoVersion) string.
   */
  openapi: string;
  /**
   * Provides metadata about the API. The metadata _MAY_ be used by tooling as required.
   */
  info: InfoObject;
  /**
   * The default value for the `$schema` keyword within [Schema Objects](https://spec.openapis.org/oas/latest.html#schema-object) contained within this OAS document. This _MUST_ be in the form of a URI.
   */
  jsonSchemaDialect?: string;
  /**
   * An array of Server Objects, which provide connectivity information to a target server. If the `servers` property is not provided, or is an empty array, the default value would be a [Server Object](https://spec.openapis.org/oas/latest.html#server-object) with a [url](https://spec.openapis.org/oas/latest.html#serverUrl) value of `/`.
   */
  servers?: ServerObject[];
  /**
   * The available paths and operations for the API.
   */
  paths?: PathsObject;
  /**
   * The incoming webhooks that _MAY_ be received as part of this API and that the API consumer _MAY_ choose to implement. Closely related to the `callbacks` feature, this section describes requests initiated other than by an API call, for example by an out of band registration. The key name is a unique string to refer to each webhook, while the (optionally referenced) Path Item Object describes a request that may be initiated by the API provider and the expected responses. An [example](https://github.com/OAI/OpenAPI-Specification/tree/master/examples/v3.1/webhook-example.yaml) is available.
   */
  webhooks?: Record<string, PathItemObject | ReferenceObject>;
  /**
   * An element to hold various schemas for the document.
   */
  components?: ComponentsObject;
  /**
   * A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement (`{}`) can be included in the array.
   */
  security?: SecurityRequirementObject[];
  /**
   * A list of tags used by the document with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the [Operation Object](https://spec.openapis.org/oas/latest.html#operation-object) must be declared. The tags that are not declared _MAY_ be organized randomly or based on the tools’ logic. Each tag name in the list _MUST_ be unique.
   */
  tags?: TagObject[];
  /**
   * Additional external documentation.
   */
  externalDocs?: ExternalDocumentationObject;
}

interface HasPaths extends BaseOpenAPIObject {
  paths: PathsObject;
}

interface HasComponents extends BaseOpenAPIObject {
  components: ComponentsObject;
}

interface HasWebhooks extends BaseOpenAPIObject {
  webhooks: Record<string, PathItemObject | ReferenceObject>;
}

/**
 * This is the root object of the [OpenAPI document](https://spec.openapis.org/oas/latest.html#openapi-document).
 *
 * A self-contained or composite resource which defines or describes an API or elements of an API. The OpenAPI document _MUST_ contain at least one [paths](https://spec.openapis.org/oas/latest.html#paths-object) field, a [components](https://spec.openapis.org/oas/latest.html#oasComponents) field or a [webhooks](https://spec.openapis.org/oas/latest.html#oasWebhooks) field. An OpenAPI document uses and conforms to the OpenAPI Specification.
 *
 * @see https://spec.openapis.org/oas/latest.html#openapi-object
 * @see https://spec.openapis.org/oas/latest.html#openapi-document
 */
export type OpenAPIObject = HasPaths | HasComponents | HasWebhooks;
