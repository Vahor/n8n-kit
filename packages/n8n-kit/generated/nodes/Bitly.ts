// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Bitly/Bitly.node.ts' node

export const name = "bitly" as const;
export const description = "Consume Bitly API" as const;
export const version = 1 as const;
export const defaults = {"name":"Bitly"} as const;
export const credentials = [{"name":"bitlyApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"bitlyOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume Bitly API
 */
export interface BitlyNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "link"
     */
    readonly resource?: "link";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "update";

    /**
     */
    readonly longUrl?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "domain"?: string, "group"?: string, "tags"?: string[], "title"?: string };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly deeplink?: { "deeplinkUi": any };

    /**
     */
    readonly id?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "archived"?: boolean, "group"?: string, "longUrl"?: string, "tags"?: string[], "title"?: string };


}

