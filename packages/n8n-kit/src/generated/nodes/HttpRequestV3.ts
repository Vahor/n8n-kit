// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HttpRequest/V3/HttpRequestV3.node.ts' node

export const description = "Makes an HTTP request and returns the response data" as const;
export const type = "n8n-nodes-base.httpRequest" as const;
export const version = 4.2 as const;
export const credentials = [{"name":"httpSslAuth","required":true,"displayOptions":{"show":{"provideSslCertificates":[true]}}}] as const;

/**
 * Makes an HTTP request and returns the response data
 */
export interface HttpRequestV3NodeParameters {

    /**
     * Type options: {"calloutAction":{"label":"Joke agent","icon":"bot","type":"openSampleWorkflowTemplate","templateId":"joke_agent_with_http_tool"}}
     */
    readonly preBuiltAgentsCalloutHttpRequest?: any;

    readonly curlImport?: any;

    /**
     * The request method to use
     * Default: "GET"
     */
    readonly method?: "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT";

    /**
     * The URL to make the request to
     */
    readonly url?: string;

    /**
     * Default: "none"
     */
    readonly authentication?: "none" | "predefinedCredentialType" | "genericCredentialType";

    readonly nodeCredentialType?: any;

    readonly googleApiWarning?: string;

    readonly genericAuthType?: any;

    readonly provideSslCertificates?: boolean;

    readonly provideSslCertificatesNotice?: string;

    readonly sslCertificate?: any;

    /**
     * Whether the request has query params or not
     */
    readonly sendQuery?: boolean;

    /**
     * Default: "keypair"
     */
    readonly specifyQuery?: "keypair" | "json";

    /**
     * Default: {"parameters":[{"name":"","value":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly queryParameters?: { "parameters": any };

    readonly jsonQuery?: string;

    /**
     * Whether the request has headers or not
     */
    readonly sendHeaders?: boolean;

    /**
     * Default: "keypair"
     */
    readonly specifyHeaders?: "keypair" | "json";

    /**
     * Default: {"parameters":[{"name":"","value":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly headerParameters?: { "parameters": any };

    readonly jsonHeaders?: string;

    /**
     * Whether the request has a body or not
     */
    readonly sendBody?: boolean;

    /**
     * Content-Type to use to send body parameters
     * Default: "json"
     */
    readonly contentType?: "form-urlencoded" | "multipart-form-data" | "json" | "binaryData" | "raw";

    /**
     * The body can be specified using explicit fields (<code>keypair</code>) or using a JavaScript object (<code>json</code>)
     * Default: "keypair"
     */
    readonly specifyBody?: "keypair" | "json" | "keypair" | "string";

    /**
     * Default: {"parameters":[{"name":"","value":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly bodyParameters?: { "parameters": any };

    readonly jsonBody?: string;

    readonly body?: string;

    /**
     * The name of the incoming field containing the binary file data to be processed
     */
    readonly inputDataFieldName?: string;

    readonly rawContentType?: string;

    /**
     * Default: {}
     */
    readonly options?: { "batching"?: { "batch": any }, "allowUnauthorizedCerts"?: boolean, "queryParameterArrays"?: "repeat" | "brackets" | "indices", "lowercaseHeaders"?: boolean, "redirect"?: { "redirect": any }, "response"?: { "response": any }, "pagination"?: { "pagination": any }, "proxy"?: string, "timeout"?: number };

    /**
     * Whether the optimize the tool response to reduce amount of data passed to the LLM that could lead to better result and reduce cost
     */
    readonly optimizeResponse?: boolean;

    /**
     * Default: "json"
     */
    readonly responseType?: "json" | "html" | "text";

    /**
     * Specify the name of the field in the response containing the data
     */
    readonly dataField?: string;

    /**
     * What fields response object should include
     * Default: "all"
     */
    readonly fieldsToInclude?: "all" | "selected" | "except";

    /**
     * Comma-separated list of the field names. Supports dot notation. You can drag the selected fields from the input panel.
     */
    readonly fields?: string;

    /**
     * Select specific element(e.g. body) or multiple elements(e.g. div) of chosen type in the response HTML.
     * Default: "body"
     */
    readonly cssSelector?: string;

    /**
     * Whether to return only content of html elements, stripping html tags and attributes
     */
    readonly onlyContent?: boolean;

    /**
     * Comma-separated list of selectors that would be excluded when extracting content
     */
    readonly elementsToOmit?: string;

    readonly truncateResponse?: boolean;

    /**
     * Default: 1000
     * Type options: {"minValue":1}
     */
    readonly maxLength?: number;

    readonly infoMessage?: string;


}

