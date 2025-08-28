// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Bitly/Bitly.node.ts' node

export const description = "Consume Bitly API" as const;
export const type = "n8n-nodes-base.bitly" as const;
export const version = 1 as const;
export const credentials = [{"name":"bitlyApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"bitlyOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BitlyNodeParameters {
    /** Default: "accessToken" */
    readonly authentication?: "accessToken" | "oAuth2";

    /** Default: "link" */
    readonly resource?: "link";

    /** Default: "create" */
    readonly operation?: "create" | "get" | "update";

    readonly longUrl?: string;

    /** Default: {} */
    readonly additionalFields?: { domain?: string, group?: string, tags?: unknown[], title?: string };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly deeplink?: { deeplinkUi: Array<{ appId?: string, appUriPath?: string, installType?: string, installUrl?: string }> };

    readonly id?: string;

    /** Default: {} */
    readonly updateFields?: { archived?: boolean, group?: string, longUrl?: string, tags?: unknown[], title?: string };

}
