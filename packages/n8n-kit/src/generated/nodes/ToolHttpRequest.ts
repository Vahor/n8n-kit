// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/tools/ToolHttpRequest/ToolHttpRequest.node.ts' node

import type { N8nCredentialsUnion } from "../credentials/index";

export const description = "Makes an HTTP request and returns the response data" as const;
export const type = "@n8n/n8n-nodes-langchain.toolHttpRequest" as const;
export const version = 1.1 as const;
export const credentials = [] as const;
export const inputs = {} as const;
export const outputs = {"ai_tool":"ai_tool"} as const;

export interface ToolHttpRequestNodeParameters {
    /**
     * Explain to LLM what this tool does, better description would allow LLM to produce expected result
     * Type options: {"rows":3}
     */
    readonly toolDescription?: string;

    /** Default: "GET" */
    readonly method?: "DELETE" | "GET" | "PATCH" | "POST" | "PUT";

    readonly url?: string;

    /**
     * Select the type of authentication to use if needed, authentication would be done by n8n and your credentials will not be shared with the LLM
     * Default: "none"
     */
    readonly authentication?: "none" | "predefinedCredentialType" | "genericCredentialType";

    readonly nodeCredentialType?: N8nCredentialsUnion["__name"];

    readonly genericAuthType?: N8nCredentialsUnion["__name"];

    /** Whether the request has query params or not */
    readonly sendQuery?: boolean;

    /** Default: "keypair" */
    readonly specifyQuery?: "keypair" | "json" | "model";

    /**
     * Default: {"values":[{"name":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly parametersQuery?: { values: Array<{ name?: string, valueProvider?: "modelRequired" | "modelOptional" | "fieldValue", value?: string }> };

    /** Type options: {"rows":5} */
    readonly jsonQuery?: string;

    /** Whether the request has headers or not */
    readonly sendHeaders?: boolean;

    /** Default: "keypair" */
    readonly specifyHeaders?: "keypair" | "json" | "model";

    /**
     * Default: {"values":[{"name":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly parametersHeaders?: { values: Array<{ name?: string, valueProvider?: "modelRequired" | "modelOptional" | "fieldValue", value?: string }> };

    /** Type options: {"rows":5} */
    readonly jsonHeaders?: string;

    /** Whether the request has body or not */
    readonly sendBody?: boolean;

    /** Default: "keypair" */
    readonly specifyBody?: "keypair" | "json" | "model";

    /**
     * Default: {"values":[{"name":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly parametersBody?: { values: Array<{ name?: string, valueProvider?: "modelRequired" | "modelOptional" | "fieldValue", value?: string }> };

    /** Type options: {"rows":5} */
    readonly jsonBody?: string;

    /**
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly placeholderDefinitions?: { values: Array<{ name?: string, description?: string, type?: "not specified" | "string" | "number" | "boolean" | "json" }> };

    /** Whether the optimize the tool response to reduce amount of data passed to the LLM that could lead to better result and reduce cost */
    readonly optimizeResponse?: boolean;

    /** Default: "json" */
    readonly responseType?: "json" | "html" | "text";

    /** Specify the name of the field in the response containing the data */
    readonly dataField?: string;

    /**
     * What fields response object should include
     * Default: "all"
     */
    readonly fieldsToInclude?: "all" | "selected" | "except";

    /** Comma-separated list of the field names. Supports dot notation. You can drag the selected fields from the input panel. */
    readonly fields?: string;

    /**
     * Select specific element(e.g. body) or multiple elements(e.g. div) of chosen type in the response HTML.
     * Default: "body"
     */
    readonly cssSelector?: string;

    /** Whether to return only content of html elements, stripping html tags and attributes */
    readonly onlyContent?: boolean;

    /** Comma-separated list of selectors that would be excluded when extracting content */
    readonly elementsToOmit?: string;

    readonly truncateResponse?: boolean;

    /**
     * Default: 1000
     * Type options: {"minValue":1}
     */
    readonly maxLength?: number;

}
