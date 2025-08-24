// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Okta/Okta.node.ts' node

export const description = "Use the Okta API" as const;
export const type = "n8n-nodes-base.okta" as const;
export const version = 1 as const;
export const credentials = [{"name":"oktaApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface OktaNodeParameters {
    /** Default: "user" */
    readonly resource?: "user";

    /** Default: "getAll" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * The user you want to operate on. Choose from the list, or specify an ID.
     * Default: {"mode":"list","value":""}
     */
    readonly userId?: {
	value: string,
	mode: "list" | "login" | "id",
};

    readonly firstName?: string;

    readonly lastName?: string;

    readonly login?: string;

    readonly email?: string;

    /**
     * Whether to activate the user and allow access to all assigned applications
     * Default: true
     */
    readonly activate?: boolean;

    /** Default: {} */
    readonly getCreateFields?: { "city"?: string, "costCenter"?: string, "countryCode"?: string, "department"?: string, "displayName"?: string, "division"?: string, "employeeNumber"?: string, "honorificPrefix"?: string, "honorificSuffix"?: string, "locale"?: string, "manager"?: string, "managerId"?: string, "middleName"?: string, "mobilePhone"?: string, "nickName"?: string, "password"?: string, "organization"?: string, "postalAddress"?: string, "preferredLanguage"?: string, "primaryPhone"?: string, "profileUrl"?: string, "recoveryQuestionAnswer"?: string, "recoveryQuestionQuestion"?: string, "secondEmail"?: string, "state"?: string, "streetAddress"?: string, "timezone"?: string, "title"?: string, "userType"?: string, "zipCode"?: string };

    /** Default: {} */
    readonly getUpdateFields?: { "city"?: string, "costCenter"?: string, "countryCode"?: string, "department"?: string, "displayName"?: string, "division"?: string, "email"?: string, "employeeNumber"?: string, "firstName"?: string, "honorificPrefix"?: string, "honorificSuffix"?: string, "lastName"?: string, "locale"?: string, "manager"?: string, "managerId"?: string, "middleName"?: string, "mobilePhone"?: string, "nickName"?: string, "organization"?: string, "password"?: string, "postalAddress"?: string, "preferredLanguage"?: string, "primaryPhone"?: string, "profileUrl"?: string, "recoveryQuestionAnswer"?: string, "recoveryQuestionQuestion"?: string, "secondEmail"?: string, "state"?: string, "streetAddress"?: string, "timezone"?: string, "title"?: string, "userType"?: string, "login"?: string, "zipCode"?: string };

    readonly searchQuery?: string;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1,"maxValue":200}
     */
    readonly limit?: number;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    /** Whether to send a deactivation email to the administrator */
    readonly sendEmail?: boolean;

}
