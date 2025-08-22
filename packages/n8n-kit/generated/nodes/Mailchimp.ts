// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mailchimp/Mailchimp.node.ts' node

export const name = "mailchimp" as const;
export const description = "Consume Mailchimp API" as const;
export const version = 1 as const;

/**
 * Consume Mailchimp API
 */
export interface MailchimpNodeParameters {

    /**
     * Default: "apiKey"
     */
    readonly authentication?: "apiKey" | "oAuth2";

    /**
     * Default: "member"
     */
    readonly resource: "campaign" | "listGroup" | "member" | "memberTag";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "getAll" | "delete" | "get" | "getAll" | "replicate" | "resend" | "send";

    /**
     * List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLists"}
     */
    readonly list?: string;

    /**
     * Email address for a subscriber
     */
    readonly email?: string;

    /**
     * Subscriber's current status
     */
    readonly status?: "cleaned" | "pending" | "subscribed" | "transactional" | "unsubscribed";

    /**
     */
    readonly jsonParameters?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "emailType"?: "html" | "text", "language"?: string, "ipOptIn"?: string, "ipSignup"?: string, "timestampSignup"?: string, "tags"?: string, "vip"?: boolean, "timestampOpt"?: string } | { "fields"?: string, "excludeFields"?: string } | { "beforeLastChanged"?: string, "beforeTimestampOpt"?: string, "emailType"?: "html" | "text", "status"?: "cleaned" | "pending" | "subscribed" | "transactional" | "unsubscribed", "sinceLastChanged"?: string } | { "isSyncing"?: boolean } | { "beforeCreateTime"?: string, "beforeSendTime"?: string, "excludeFields"?: string[], "fields"?: string[], "listId"?: string, "sinceCreateTime"?: string, "sinceSendTime"?: string, "sortDirection"?: "ASC" | "DESC", "sortField"?: "create_time" | "send_time", "status"?: "save" | "sending" | "sent" | "schedule" };

    /**
     * Subscriber location information.n
     * Default: {}
     */
    readonly locationFieldsUi?: { "locationFieldsValues": any };

    /**
     * An individual merge var and value for a member
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly mergeFieldsUi?: { "mergeFieldsValues": any };

    /**
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly mergeFieldsJson?: string;

    /**
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly locationJson?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly groupsUi?: { "groupsValues": any };

    /**
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly groupJson?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 500
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly updateFields?: { "emailType"?: "html" | "text", "groupsUi"?: { "groupsValues": any }, "language"?: string, "mergeFieldsUi"?: { "mergeFieldsValues": any }, "ipOptIn"?: string, "ipSignup"?: string, "timestampSignup"?: string, "skipMergeValidation"?: boolean, "status"?: "cleaned" | "pending" | "subscribed" | "transactional" | "unsubscribed", "vip"?: boolean, "locationFieldsUi"?: { "locationFieldsValues": any }, "timestampOpt"?: string };

    /**
     * Default: []
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Tag"}
     */
    readonly tags?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getGroupCategories","loadOptionsDependsOn":["list"]}
     */
    readonly groupCategory?: string;

    /**
     * List of Campaigns
     */
    readonly campaignId?: string;


}

