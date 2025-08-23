// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Slack/SlackTrigger.node.ts' node

export const name = "slackTrigger" as const;
export const description = "Handle Slack events via webhooks" as const;
export const version = 1 as const;
export const credentials = [{"name":"slackApi","required":true}] as const;

/**
 * Handle Slack events via webhooks
 */
export interface SlackTriggerNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: any;

    /**
     */
    readonly notice?: string;

    /**
     * Default: []
     */
    readonly trigger?: ("any_event" | "app_mention" | "file_public" | "file_share" | "message" | "channel_created" | "team_join" | "reaction_added")[];

    /**
     * Whether to watch for the event in the whole workspace, rather than a specific channel
     */
    readonly watchWorkspace?: boolean;

    /**
     * The Slack channel to listen to events from. Applies to events: Bot/App mention, File Shared, New Message Posted on Channel, Reaction Added.
     * Default: {"mode":"list","value":""}
     */
    readonly channelId?: any;

    /**
     * Whether to download the files and add it to the output
     */
    readonly downloadFiles?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "resolveIds"?: boolean, "userIds"?: any[] };


}

