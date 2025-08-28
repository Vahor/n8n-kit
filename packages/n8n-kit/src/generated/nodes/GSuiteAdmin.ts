// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/GSuiteAdmin/GSuiteAdmin.node.ts' node

export const description = "Consume Google Workspace Admin API" as const;
export const type = "n8n-nodes-base.gSuiteAdmin" as const;
export const version = 1 as const;
export const credentials = [{"name":"gSuiteAdminOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GSuiteAdminNodeParameters {
    /** Default: "user" */
    readonly resource?: "device" | "group" | "user";

    /** Default: "get" */
    readonly operation?: "get" | "getAll" | "update" | "changeStatus" | "create" | "delete" | "get" | "getAll" | "update" | "addToGroup" | "create" | "delete" | "get" | "getAll" | "removeFromGroup" | "update";

    /**
     * Select the device you want to retrieve
     * Default: {"mode":"list","value":""}
     */
    readonly deviceId?: {
	value: string,
	mode: "list" | "deviceId",
};

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * What subset of fields to fetch for this device
     * Default: "basic"
     */
    readonly projection?: "basic" | "full" | "basic" | "custom" | "full";

    /** Whether to include devices from organizational units below your specified organizational unit */
    readonly includeChildOrgunits?: boolean;

    /** Default: {} */
    readonly filter?: { orgUnitPath?: string, query?: string } | { customer?: string, domain?: string, query?: string, userId?: string } | { customer?: string, domain?: string, query?: string, showDeleted?: boolean };

    /**
     * Define sorting rules for the results
     * Default: {}
     */
    readonly sort?: { sortRules: { orderBy?: "annotatedLocation" | "annotatedUser" | "lastSync" | "notes" | "serialNumber" | "status", sortBy?: "ascending" | "descending" } } | { sortRules: { orderBy?: "email", sortOrder?: "ASCENDING" | "DESCENDING" } } | { sortRules: { orderBy?: "email" | "familyName" | "givenName", sortOrder?: "ASCENDING" | "DESCENDING" } };

    /** Default: {} */
    readonly updateOptions?: { orgUnitPath?: string, annotatedUser?: string, annotatedLocation?: string, annotatedAssetId?: string, notes?: string };

    /**
     * Set the status of a device
     * Default: "reenable"
     */
    readonly action?: "reenable" | "disable";

    /**
     * Select the group to perform the operation on
     * Default: {"mode":"list","value":""}
     */
    readonly groupId?: {
	value: string,
	mode: "list" | "GroupId",
} | {
	value: string,
	mode: "list" | "groupId",
};

    /** The group's display name */
    readonly name?: string;

    /** The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The email must be unique */
    readonly email?: string;

    /** Default: {} */
    readonly additionalFields?: { description?: string } | { changePasswordAtNextLogin?: boolean, phoneUi?: { phoneValues: Array<{ type?: "assistant" | "callback" | "car" | "company_main" | "custom" | "grand_central" | "home" | "home_fax" | "isdn" | "main" | "mobile" | "other" | "other_fax" | "pager" | "radio" | "telex" | "tty_tdd" | "work" | "work_fax" | "work_mobile" | "work_pager", value?: string, primary?: boolean }> }, emailUi?: { emailValues: Array<{ type?: "home" | "work" | "other", address?: string }> }, roles?: ("directorySyncAdmin" | "groupsAdmin" | "groupsEditor" | "groupsReader" | "helpDeskAdmin" | "inventoryReportingAdmin" | "mobileAdmin" | "servicesAdmin" | "storageAdmin" | "superAdmin" | "userManagement")[], customFields?: { fieldValues: Array<{ schemaName?: string, fieldName: string, value: string }> } };

    /** Default: {} */
    readonly updateFields?: { description?: string, email?: string, name?: string } | { archived?: boolean, suspendUi?: boolean, changePasswordAtNextLogin?: boolean, firstName?: string, lastName?: string, password?: string, phoneUi?: { phoneValues: Array<{ type?: "assistant" | "callback" | "car" | "company_main" | "custom" | "grand_central" | "home" | "home_fax" | "isdn" | "main" | "mobile" | "other" | "other_fax" | "pager" | "radio" | "telex" | "tty_tdd" | "work" | "work_fax" | "work_mobile" | "work_pager", value?: string, primary?: boolean }> }, primaryEmail?: string, emailUi?: { emailValues: Array<{ type?: "home" | "work" | "other", address?: string }> }, roles?: ("directorySyncAdmin" | "groupsAdmin" | "groupsEditor" | "groupsReader" | "helpDeskAdmin" | "inventoryReportingAdmin" | "mobileAdmin" | "servicesAdmin" | "storageAdmin" | "superAdmin" | "userManagement")[], customFields?: { fieldValues: Array<{ schemaName?: string, fieldName: string, value: string }> } };

    /**
     * Select the user to perform the operation on
     * Default: {"mode":"list","value":""}
     */
    readonly userId?: {
	value: string,
	mode: "list" | "userEmail" | "userId",
};

    readonly firstName?: string;

    readonly lastName?: string;

    /**
     * Stores the password for the user account. A minimum of 8 characters is required. The maximum length is 100 characters.
     * Type options: {"password":true}
     */
    readonly password?: string;

    /** The username that will be set to the user. Example: If you domain is example.com and you set the username to n.smith then the user's final email address will be n.smith@example.com. */
    readonly username?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getDomains"}
     */
    readonly domain?: string;

    /** Default: "simplified" */
    readonly output?: "simplified" | "raw" | "select";

    /**
     * Fields to include in the response when "Select Included Fields" is chosen
     * Default: []
     */
    readonly fields?: ("creationTime" | "isAdmin" | "kind" | "lastLoginTime" | "name" | "primaryEmail" | "suspended")[];

    /**
     * A comma-separated list of schema names. All fields from these schemas are fetched. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getSchemas"}
     */
    readonly customFieldMask?: unknown[];

}
