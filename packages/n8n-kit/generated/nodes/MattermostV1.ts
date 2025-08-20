// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Mattermost/v1/MattermostV1.node.ts' node

export const name = "mattermost" as const;
export const description = "Sends data to Mattermost" as const;
export const version = 1 as const;
export const defaults = {"name":"Mattermost"} as const;
export const credentials = [{"name":"mattermostApi","required":true}] as const

/**
 * Sends data to Mattermost
 */
export interface MattermostV1NodeParameters {

    /**
     * Default: "message"
     */
    readonly resource?: "channel" | "message" | "reaction" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "addUser" | "create" | "delete" | "members" | "restore" | "search" | "statistics" | "post" | "postEphemeral" | "getAll" | "deactive" | "getByEmail" | "getById" | "invite";


}

