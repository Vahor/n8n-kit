// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Gong/Gong.node.ts' node

export const description = "Interact with Gong API" as const;
export const type = "n8n-nodes-base.gong" as const;
export const version = 1 as const;
export const credentials = [{"name":"gongApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"gongOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * Interact with Gong API
 */
export interface GongNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "call"
     */
    readonly resource?: "call" | "user";

    /**
     * Default: "getAll"
     */
    readonly operation?: "get" | "getAll";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly call?: any;

    /**
     * Default: {}
     */
    readonly options?: { "properties"?: ("pointsOfInterest" | "media" | "brief" | "publicComments" | "highlights" | "keyPoints" | "callOutcome" | "outline" | "parties" | "structure" | "topics" | "trackers" | "transcript")[] } | { "properties"?: ("parties" | "topics")[] };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "fromDateTime"?: string, "toDateTime"?: string, "workspaceId"?: string, "callIds"?: string, "primaryUserIds"?: any } | { "createdFromDateTime"?: string, "createdToDateTime"?: string, "userIds"?: string };

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly user?: any;


}

