// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/HttpRequest/V3/HttpRequestV3.node.js' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 4.1 as const;
export const defaults = {"name":"HTTP Request","color":"#2200DD"} as const;
export const credentials = [] as const

/**
 * undefined
 */
export interface HttpRequestV3NodeParameters {

    /**
     */
    readonly curlImport?: any;

    /**
     * The request method to use
     * Default: "GET"
     */
    readonly method?: "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT";

    /**
     * The URL to make the request to
     */
    readonly url: string;

    /**
     * Default: "none"
     */
    readonly authentication?: "none" | "predefinedCredentialType" | "genericCredentialType";

    /**
     */
    readonly nodeCredentialType?: any;

    /**
     */
    readonly googleApiWarning?: string;

    /**
     */
    readonly genericAuthType?: any;

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

    /**
     */
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

    /**
     */
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
    readonly specifyBody?: "keypair" | "json" | "string";

    /**
     * Default: {"parameters":[{"name":"","value":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly bodyParameters?: { "parameters": any };

    /**
     */
    readonly jsonBody?: string;

    /**
     */
    readonly body?: string;

    /**
     * The name of the incoming field containing the binary file data to be processed
     */
    readonly inputDataFieldName?: string;

    /**
     */
    readonly rawContentType?: string;

    /**
     * Default: {}
     */
    readonly options?: { "batching"?: { "batch": any }, "allowUnauthorizedCerts"?: boolean, "queryParameterArrays"?: "repeat" | "brackets" | "indices", "redirect"?: { "redirect": any }, "redirect"?: { "redirect": any }, "response"?: { "response": any }, "proxy"?: string, "timeout"?: number };

    /**
     */
    readonly infoMessage?: string;


}

