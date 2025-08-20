// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Google/GSuiteAdmin/GSuiteAdmin.node.js' node

export const name = "gSuiteAdmin" as const;
export const description = "Consume Google Workspace Admin API" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Workspace Admin"} as const;
export const credentials = [{"name":"gSuiteAdminOAuth2Api","required":true}] as const

/**
 * Consume Google Workspace Admin API
 */
export interface GSuiteAdminNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "group" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The email must be unique
     */
    readonly email?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "description"?: string, "name"?: string, "changePasswordAtNextLogin"?: boolean, "phoneUi"?: { "phoneValues": any }, "emailUi"?: { "emailValues": any } };

    /**
     * Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
     */
    readonly groupId?: string;

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
    readonly options?: { "customer"?: string, "domain"?: string, "orderBy"?: "email", "query"?: string, "sortOrder"?: "ASCENDING" | "DESCENDING", "userId"?: string, "customFieldMask"?: string[], "viewType"?: "admin_view" | "DESCENDING", "showDeleted"?: boolean };

    /**
     * Default: {}
     */
    readonly updateFields?: { "description"?: string, "email"?: string, "name"?: string, "archived"?: boolean, "changePasswordAtNextLogin"?: boolean, "firstName"?: string, "lastName"?: string, "password"?: string, "phoneUi"?: { "phoneValues": any }, "primaryEmail"?: string, "emailUi"?: { "emailValues": any } };

    /**
     */
    readonly firstName?: string;

    /**
     */
    readonly lastName?: string;

    /**
     * Stores the password for the user account. A minimum of 8 characters is required. The maximum length is 100 characters.
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getDomains"}
     */
    readonly domain?: string;

    /**
     * The username that will be set to the user. Example: If you domain is example.com and you set the username to jhon then the user's final email address will be jhon@example.com.
     */
    readonly username?: string;

    /**
     * Whether to make a user a super administrator
     */
    readonly makeAdmin?: boolean;

    /**
     * The value can be the user's primary email address, alias email address, or unique user ID
     */
    readonly userId?: string;

    /**
     * What subset of fields to fetch for this user
     * Default: "basic"
     */
    readonly projection?: "basic" | "custom" | "full";


}

