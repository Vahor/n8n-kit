// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/MondayCom/MondayCom.node.ts' node

export const name = "mondayCom" as const;
export const description = "Consume Monday.com API" as const;
export const version = 1 as const;
export const defaults = {"name":"Monday.com"} as const;
export const credentials = [{"name":"mondayComApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"mondayComOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume Monday.com API
 */
export interface MondayComNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "board"
     */
    readonly resource?: "board" | "boardColumn" | "boardGroup" | "boardItem";


}

