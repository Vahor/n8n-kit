// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Zulip/Zulip.node.ts' node

export const description = "Consume Zulip API" as const;
export const type = "n8n-nodes-base.zulip" as const;
export const version = 1 as const;
export const credentials = [{"name":"zulipApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface ZulipNodeParameters {

    /**
     * Default: "message"
     */
    readonly resource?: "message" | "stream" | "user";

    /**
     * Default: "sendPrivate"
     */
    readonly operation?: "delete" | "get" | "sendPrivate" | "sendStream" | "update" | "updateFile" | "create" | "delete" | "getAll" | "getSubscribed" | "update" | "create" | "deactivate" | "get" | "getAll" | "update";

    /**
     * The destination stream, or a comma-separated list containing the usernames (emails) of the recipients. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly to?: any[];

    /**
     * The content of the message
     */
    readonly content?: string;

    /**
     * The destination stream, or a comma-separated list containing the usernames (emails) of the recipients. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getStreams"}
     */
    readonly stream?: string;

    /**
     * The topic of the message. Only required if type is stream, ignored otherwise. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["stream"],"loadOptionsMethod":"getTopics"}
     */
    readonly topic?: string;

    /**
     * Unique identifier for the message
     */
    readonly messageId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "content"?: string, "propagateMode"?: "changeOne" | "changeLater" | "changeAll", "topic"?: string };

    /**
     * Default: "data"
     */
    readonly dataBinaryProperty?: string;

    readonly jsonParameters?: boolean;

    /**
     * JSON format parameters for stream creation
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly additionalFieldsJson?: string;

    /**
     * A list of dictionaries containing the the key name and value specifying the name of the stream to subscribe. If the stream does not exist a new stream is created.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly subscriptions?: { "properties": any };

    /**
     * Default: {}
     */
    readonly additionalFields?: { "announce"?: boolean, "authorizationErrorsFatal"?: boolean, "historyPublicToSubscribers"?: boolean, "inviteOnly"?: boolean, "principals"?: { "properties": any }, "streamPostPolicy"?: "1" | "2" | "3" } | { "includeAllActive"?: boolean, "includeDefault"?: boolean, "includeOwnersubscribed"?: boolean, "includePublic"?: boolean, "includeSubscribed"?: boolean } | { "includeSubscribers"?: boolean } | { "isAnnouncementOnly"?: boolean, "description"?: string, "isPrivate"?: boolean, "historyPublicToSubscribers"?: boolean, "newName"?: string, "streamPostPolicy"?: "1" | "2" | "3" } | { "clientGravatar"?: boolean, "includeCustomProfileFields"?: boolean } | { "fullName"?: string, "isAdmin"?: boolean, "isGuest"?: boolean, "profileData"?: { "property": any }, "role"?: "600" | "400" | "200" | "300" | "100" };

    /**
     * ID of stream to update
     */
    readonly streamId?: string;

    /**
     * The email address of the new user
     */
    readonly email?: string;

    /**
     * The full name of the new user
     */
    readonly fullName?: string;

    /**
     * The password of the new user
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * The short name of the new user. Not user-visible.
     */
    readonly shortName?: string;

    /**
     * The ID of user to get
     */
    readonly userId?: string;


}

