// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Facebook/FacebookGraphApi.node.ts' node

export const description = "Interacts with Facebook using the Graph API" as const;
export const type = "n8n-nodes-base.facebookGraphApi" as const;
export const version = 1 as const;
export const credentials = [{"name":"facebookGraphApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface FacebookGraphApiNodeParameters {
    /**
     * The Host URL of the request. Almost all requests are passed to the graph.facebook.com host URL. The single exception is video uploads, which use graph-video.facebook.com.
     * Default: "graph.facebook.com"
     */
    readonly hostUrl?: "graph.facebook.com" | "graph-video.facebook.com";

    /**
     * The HTTP Method to be used for the request
     * Default: "GET"
     */
    readonly httpRequestMethod?: "GET" | "POST" | "DELETE";

    /** The version of the Graph API to be used in the request */
    readonly graphApiVersion?: "" | "v23.0" | "v22.0" | "v21.0" | "v20.0" | "v19.0" | "v18.0" | "v17.0" | "v16.0" | "v15.0" | "v14.0" | "v13.0" | "v12.0" | "v11.0" | "v10.0" | "v9.0" | "v8.0" | "v7.0" | "v6.0" | "v5.0" | "v4.0" | "v3.3" | "v3.2" | "v3.1" | "v3.0";

    /** The node on which to operate. A node is an individual object with a unique ID. For example, there are many User node objects, each with a unique ID representing a person on Facebook. */
    readonly node?: string;

    /** Edge of the node on which to operate. Edges represent collections of objects which are attached to the node. */
    readonly edge?: string;

    /** Whether to connect even if SSL certificate validation is not possible */
    readonly allowUnauthorizedCerts?: boolean;

    /** Whether binary data should be sent as body */
    readonly sendBinaryData?: boolean;

    /** For Form-Data Multipart, they can be provided in the format: <code>"sendKey1:binaryProperty1,sendKey2:binaryProperty2</code> */
    readonly binaryPropertyName?: string;

    /** Default: {} */
    readonly options?: { fields?: { field: Array<{ name?: string }> }, queryParameters?: { parameter: Array<{ name?: string, value?: string }> }, queryParametersJson?: string };

}
