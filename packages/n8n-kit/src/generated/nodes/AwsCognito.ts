// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/Cognito/AwsCognito.node.ts' node

export const description = "Sends data to AWS Cognito" as const;
export const type = "n8n-nodes-base.awsCognito" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;

/**
 * Sends data to AWS Cognito
 */
export interface AwsCognitoNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "group" | "user" | "userPool";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "addToGroup" | "create" | "delete" | "get" | "getAll" | "removeFromGroup" | "update" | "get";

    /**
     * Select the user pool to use
     * Default: {"mode":"list","value":""}
     */
    readonly userPool?: any;

    /**
     * The name of the new group to create
     */
    readonly newGroupName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "description"?: string, "precedence"?: number, "arn"?: string } | { "messageAction"?: "RESEND" | "SUPPRESS", "forceAliasCreation"?: boolean, "userAttributes": { "attributes": any }, "desiredDeliveryMediums"?: ("SMS" | "EMAIL")[], "temporaryPasswordOptions"?: string };

    /**
     * Select the group you want to delete
     * Default: {"mode":"list","value":""}
     */
    readonly group?: any;

    /**
     * Whether to include a list of users in the group
     */
    readonly includeUsers?: boolean;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":60}
     */
    readonly limit?: number;

    /**
     * Depending on the user pool settings, this parameter requires the username, the email, or the phone number. No whitespace is allowed.
     */
    readonly newUserName?: string;

    /**
     * Select the user you want to delete
     * Default: {"mode":"list","value":""}
     */
    readonly user?: any;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Default: {}
     */
    readonly filters?: { "filter": any };

    /**
     * Attributes to update for the user
     * Default: {"attributes":[]}
     * Type options: {"multipleValues":true}
     */
    readonly userAttributes?: { "attributes": any };


}

