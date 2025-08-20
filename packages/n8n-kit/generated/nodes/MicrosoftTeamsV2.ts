// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/Teams/v2/MicrosoftTeamsV2.node.ts' node

export const name = "microsoftTeams" as const;
export const description = "Consume Microsoft Teams API" as const;
export const version = 2 as const;
export const defaults = {"name":"Microsoft Teams"} as const;
export const credentials = [{"name":"microsoftTeamsOAuth2Api","required":true}] as const

/**
 * Consume Microsoft Teams API
 */
export interface MicrosoftTeamsV2NodeParameters {

    /**
     * Default: "channel"
     */
    readonly resource?: "channel" | "channelMessage" | "chatMessage" | "task";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "deleteChannel" | "get" | "getAll" | "update" | "SEND_AND_WAIT_OPERATION";


}

