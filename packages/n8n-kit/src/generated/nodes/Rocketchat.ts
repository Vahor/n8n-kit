// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Rocketchat/Rocketchat.node.ts' node

export const description = "Consume RocketChat API" as const;
export const type = "n8n-nodes-base.rocketchat" as const;
export const version = 1 as const;
export const credentials = [{"name":"rocketchatApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface RocketchatNodeParameters {

    /**
     * Default: "chat"
     */
    readonly resource?: "chat";

    /**
     * Default: "postMessage"
     */
    readonly operation?: "postMessage";

    /**
     * The channel name with the prefix in front of it
     */
    readonly channel?: string;

    /**
     * The text of the message to send, is optional because of attachments
     */
    readonly text?: string;

    readonly jsonParameters?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "alias"?: string, "avatar"?: string, "emoji"?: string };

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Attachment"}
     */
    readonly attachments?: { "color"?: any, "text"?: string, "ts"?: string, "thumbUrl"?: string, "messageLink"?: string, "collapsed"?: boolean, "authorName"?: string, "authorLink"?: string, "authorIcon"?: string, "title"?: string, "titleLink"?: string, "titleLinkDownload"?: boolean, "imageUrl"?: string, "audioUrl"?: string, "videoUrl"?: string, "fields"?: { "fieldsValues": any } };

    /**
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly attachmentsJson?: string;


}

