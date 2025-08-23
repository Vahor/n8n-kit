// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Matrix/Matrix.node.ts' node

export const description = "Consume Matrix API" as const;
export const type = "n8n-nodes-base.matrix" as const;
export const version = 1 as const;
export const credentials = [{"name":"matrixApi","required":true}] as const;

/**
 * Consume Matrix API
 */
export interface MatrixNodeParameters {

    /**
     * Default: "message"
     */
    readonly resource?: "account" | "event" | "media" | "message" | "room" | "roomMember";

    /**
     * Default: "me"
     */
    readonly operation?: "me" | "get" | "upload" | "create" | "getAll" | "create" | "invite" | "join" | "kick" | "leave" | "getAll";

    /**
     * The room related to the event
     */
    readonly roomId?: string;

    /**
     * The room related to the event
     */
    readonly eventId?: string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Type of file being uploaded
     * Default: "image"
     */
    readonly mediaType?: "file" | "image" | "audio" | "video";

    /**
     * Default: {}
     */
    readonly additionalFields?: { "fileName"?: string };

    /**
     * The text to send
     */
    readonly text?: string;

    /**
     * The type of message to send
     * Default: "m.text"
     */
    readonly messageType?: "m.emote" | "m.notice" | "m.text";

    /**
     * The format of the message's body
     * Default: "plain"
     */
    readonly messageFormat?: "plain" | "org.matrix.custom.html";

    /**
     * A plain text message to display in case the HTML cannot be rendered by the Matrix client
     */
    readonly fallbackText?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly otherOptions?: { "filter"?: string };

    readonly roomName?: string;

    /**
     * Default: "public_chat"
     */
    readonly preset?: "private_chat" | "public_chat";

    readonly roomAlias?: string;

    readonly roomIdOrAlias?: string;

    /**
     * The fully qualified user ID of the invitee
     */
    readonly userId?: string;

    /**
     * Reason for kick
     */
    readonly reason?: string;

    /**
     * Filtering options
     * Default: {}
     */
    readonly filters?: { "notMembership"?: "" | "ban" | "invite" | "join" | "leave", "membership"?: "" | "ban" | "invite" | "join" | "leave" };


}

