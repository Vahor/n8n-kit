// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/Cognito/AwsCognito.node.ts' node

export const description = "Sends data to AWS Cognito" as const;
export const type = "n8n-nodes-base.awsCognito" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsCognitoNodeParameters {
    /** Default: "user" */
    readonly resource?: "group" | "user" | "userPool";

    /** Default: "getAll" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "addToGroup" | "create" | "delete" | "get" | "getAll" | "removeFromGroup" | "update" | "get";

    /**
     * Select the user pool to use
     * Default: {"mode":"list","value":""}
     */
    readonly userPool?: {
	value: string,
	mode: "list" | "id",
};

    /** The name of the new group to create */
    readonly newGroupName?: string;

    /** Default: {} */
    readonly additionalFields?: { description?: string, precedence?: number, arn?: string } | { messageAction?: "RESEND" | "SUPPRESS", forceAliasCreation?: boolean, userAttributes: { attributes: Array<{ attributeType?: "standard" | "custom", standardName?: "address" | "birthdate" | "email" | "email_verified" | "family_name" | "gender" | "given_name" | "locale" | "middle_name" | "name" | "nickname" | "phone_number" | "phone_number_verified" | "preferred_username" | "profilepicture" | "updated_at" | "sub" | "website" | "zoneinfo", customName?: string, value?: string }> }, desiredDeliveryMediums?: ("SMS" | "EMAIL")[], temporaryPasswordOptions?: string };

    /**
     * Select the group you want to delete
     * Default: {"mode":"list","value":""}
     */
    readonly group?: {
	value: string,
	mode: "list" | "groupName",
};

    /** Whether to include a list of users in the group */
    readonly includeUsers?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":60}
     */
    readonly limit?: number;

    /** Depending on the user pool settings, this parameter requires the username, the email, or the phone number. No whitespace is allowed. */
    readonly newUserName?: string;

    /**
     * Select the user you want to delete
     * Default: {"mode":"list","value":""}
     */
    readonly user?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /** Default: {} */
    readonly filters?: { filter: { attribute?: "cognito:user_status" | "email" | "family_name" | "given_name" | "name" | "phone_number" | "preferred_username" | "status" | "sub" | "username", value?: string } };

    /**
     * Attributes to update for the user
     * Default: {"attributes":[]}
     * Type options: {"multipleValues":true}
     */
    readonly userAttributes?: { attributes: Array<{ attributeType?: "standard" | "custom", standardName?: "address" | "birthdate" | "email" | "family_name" | "gender" | "given_name" | "locale" | "middle_name" | "name" | "nickname" | "phone_number" | "preferred_username" | "profilepicture" | "updated_at" | "sub" | "website" | "zoneinfo", customName?: string, value?: string }> };

}
