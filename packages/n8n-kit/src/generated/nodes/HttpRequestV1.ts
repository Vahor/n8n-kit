// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HttpRequest/V1/HttpRequestV1.node.ts' node

export const description = "Makes an HTTP request and returns the response data" as const;
export const type = "n8n-nodes-base.httpRequest" as const;
export const version = 1 as const;
export const credentials = [{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"authentication":["basicAuth"]}}},{"name":"httpDigestAuth","required":true,"displayOptions":{"show":{"authentication":["digestAuth"]}}},{"name":"httpHeaderAuth","required":true,"displayOptions":{"show":{"authentication":["headerAuth"]}}},{"name":"httpQueryAuth","required":true,"displayOptions":{"show":{"authentication":["queryAuth"]}}},{"name":"oAuth1Api","required":true,"displayOptions":{"show":{"authentication":["oAuth1"]}}},{"name":"oAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface HttpRequestV1NodeParameters {
    /**
     * The way to authenticate
     * Default: "none"
     */
    readonly authentication?: "basicAuth" | "digestAuth" | "headerAuth" | "none" | "oAuth1" | "oAuth2" | "queryAuth";

    /**
     * The request method to use
     * Default: "GET"
     */
    readonly requestMethod?: "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT";

    /**
     * The URL to make the request to
     */
    readonly url?: string;

    /**
     * Whether to download the response even if SSL certificate validation is not possible
     */
    readonly allowUnauthorizedCerts?: boolean;

    /**
     * The format in which the data gets returned from the URL
     * Default: "json"
     */
    readonly responseFormat?: "file" | "json" | "string";

    /**
     * Name of the property to which to write the response data
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /**
     * Whether the query and/or body parameter should be set via the value-key pair UI or JSON/RAW
     */
    readonly jsonParameters?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "batchInterval"?: number, "batchSize"?: number, "bodyContentType"?: "json" | "raw" | "multipart-form-data" | "form-urlencoded", "fullResponse"?: boolean, "followAllRedirects"?: boolean, "followRedirect"?: boolean, "ignoreResponseCode"?: boolean, "bodyContentCustomMimeType"?: string, "proxy"?: string, "splitIntoItems"?: boolean, "timeout"?: number, "useQueryString"?: boolean };

    /**
     * Whether binary data should be send as body
     */
    readonly sendBinaryData?: boolean;

    /**
     * For Form-Data Multipart, they can be provided in the format: <code>"sendKey1:binaryProperty1,sendKey2:binaryProperty2</code>
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Body parameters as JSON or RAW
     */
    readonly bodyParametersJson?: string;

    /**
     * The body parameter to send
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly bodyParametersUi?: { "parameter": any };

    /**
     * Header parameters as JSON or RAW
     */
    readonly headerParametersJson?: string;

    /**
     * The headers to send
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly headerParametersUi?: { "parameter": any };

    /**
     * Query parameters as JSON (flat object)
     */
    readonly queryParametersJson?: string;

    /**
     * The query parameter to send
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly queryParametersUi?: { "parameter": any };

}
