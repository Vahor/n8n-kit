// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/GraphQL/GraphQL.node.ts' node

export const description = "Makes a GraphQL request and returns the received data" as const;
export const type = "n8n-nodes-base.graphql" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"authentication":["basicAuth"]}}},{"name":"httpCustomAuth","required":true,"displayOptions":{"show":{"authentication":["customAuth"]}}},{"name":"httpDigestAuth","required":true,"displayOptions":{"show":{"authentication":["digestAuth"]}}},{"name":"httpHeaderAuth","required":true,"displayOptions":{"show":{"authentication":["headerAuth"]}}},{"name":"httpQueryAuth","required":true,"displayOptions":{"show":{"authentication":["queryAuth"]}}},{"name":"oAuth1Api","required":true,"displayOptions":{"show":{"authentication":["oAuth1"]}}},{"name":"oAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GraphQLNodeParameters {
    /**
     * The way to authenticate
     * Default: "none"
     */
    readonly authentication?: "basicAuth" | "customAuth" | "digestAuth" | "headerAuth" | "none" | "oAuth1" | "oAuth2" | "queryAuth";

    /**
     * The underlying HTTP request method to use
     * Default: "POST"
     */
    readonly requestMethod?: "GET" | "POST";

    /** The GraphQL endpoint */
    readonly endpoint?: string;

    /** Whether to download the response even if SSL certificate validation is not possible */
    readonly allowUnauthorizedCerts?: boolean;

    /**
     * The format for the query payload
     * Default: "graphql"
     */
    readonly requestFormat?: "graphql" | "json" | "json" | "graphql";

    /**
     * GraphQL query
     * Type options: {"rows":6}
     */
    readonly query?: string;

    /** Query variables as JSON object */
    readonly variables?: string;

    /** Name of operation to execute */
    readonly operationName?: string;

    /**
     * The format in which the data gets returned from the URL
     * Default: "json"
     */
    readonly responseFormat?: "json" | "string";

    /**
     * Name of the property to which to write the response data
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /**
     * The headers to send
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly headerParametersUi?: { parameter: { name?: string, value?: string } };

}
