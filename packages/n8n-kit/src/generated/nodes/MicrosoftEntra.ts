// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Entra/MicrosoftEntra.node.ts' node

export const name = "microsoftEntra" as const;
export const description = "Interact with Microsoft Entra ID API" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftEntraOAuth2Api","required":true}] as const;

/**
 * Interact with Microsoft Entra ID API
 */
export interface MicrosoftEntraNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "group" | "user";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "addGroup" | "create" | "delete" | "get" | "getAll" | "removeGroup" | "update";

    /**
     */
    readonly groupType?: "Unified" | "";

    /**
     * The name to display in the address book for the group
     */
    readonly displayName?: string;

    /**
     * The mail alias for the group. Only enter the local-part without the domain.
     */
    readonly mailNickname?: string;

    /**
     * Whether the group is mail-enabled
     */
    readonly mailEnabled?: boolean;

    /**
     */
    readonly membershipType?: "" | "DynamicMembership";

    /**
     * Whether the group is a security group
     * Default: true
     */
    readonly securityEnabled?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "isAssignableToRole"?: boolean, "description"?: string, "membershipRule"?: string, "membershipRuleProcessingState"?: "On" | "Paused", "preferredDataLocation"?: string, "uniqueName"?: string, "visibility"?: "Private" | "Public" } | { "aboutMe"?: string, "ageGroup"?: "Adult" | "Minor" | "NotAdult", "birthday"?: string, "businessPhones"?: string, "city"?: string, "companyName"?: string, "consentProvidedForMinor"?: "Denied" | "Granted" | "NotRequired", "country"?: string, "department"?: string, "employeeId"?: string, "employeeType"?: string, "employeeHireDate"?: string, "employeeLeaveDateTime"?: string, "employeeOrgData"?: { "employeeOrgValues": any }, "givenName"?: string, "forceChangePassword"?: "forceChangePasswordNextSignIn" | "forceChangePasswordNextSignInWithMfa", "interests"?: string, "jobTitle"?: string, "surname"?: string, "mail"?: string, "mobilePhone"?: string, "mySite"?: string, "officeLocation"?: string, "onPremisesImmutableId"?: string, "otherMails"?: string, "passwordPolicies"?: ("DisablePasswordExpiration" | "DisableStrongPassword")[], "pastProjects"?: string, "postalCode"?: string, "preferredLanguage"?: string, "responsibilities"?: string, "schools"?: string, "skills"?: string, "state"?: string, "streetAddress"?: string, "usageLocation"?: string, "userType"?: "Guest" | "Member" };

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly group?: any;

    /**
     * Default: "simple"
     */
    readonly output?: "simple" | "raw" | "fields";

    /**
     * The fields to add to the output
     * Default: []
     * Type options: {"loadOptionsMethod":"getGroupProperties"}
     */
    readonly fields?: any[];

    /**
     * Default: {}
     */
    readonly options?: { "includeMembers"?: boolean };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * <a href="https://docs.microsoft.com/en-us/graph/query-parameters#filter-parameter">Query parameter</a> to filter results by
     */
    readonly filter?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "allowExternalSenders"?: boolean, "autoSubscribeNewMembers"?: boolean, "description"?: string, "displayName"?: string, "mailNickname"?: string, "membershipRule"?: string, "membershipRuleProcessingState"?: "On" | "Paused", "preferredDataLocation"?: string, "securityEnabled"?: boolean, "uniqueName"?: string, "visibility"?: "Private" | "Public" } | { "aboutMe"?: string, "accountEnabled"?: boolean, "ageGroup"?: "Adult" | "Minor" | "NotAdult", "birthday"?: string, "businessPhones"?: string, "city"?: string, "companyName"?: string, "consentProvidedForMinor"?: "Denied" | "Granted" | "NotRequired", "country"?: string, "department"?: string, "displayName"?: string, "employeeId"?: string, "employeeType"?: string, "givenName"?: string, "employeeHireDate"?: string, "employeeLeaveDateTime"?: string, "employeeOrgData"?: { "employeeOrgValues": any }, "forceChangePassword"?: "forceChangePasswordNextSignIn" | "forceChangePasswordNextSignInWithMfa", "interests"?: string, "jobTitle"?: string, "surname"?: string, "mail"?: string, "mailNickname"?: string, "mobilePhone"?: string, "mySite"?: string, "officeLocation"?: string, "onPremisesImmutableId"?: string, "otherMails"?: string, "password"?: string, "passwordPolicies"?: ("DisablePasswordExpiration" | "DisableStrongPassword")[], "pastProjects"?: string, "postalCode"?: string, "preferredLanguage"?: string, "responsibilities"?: string, "schools"?: string, "skills"?: string, "state"?: string, "streetAddress"?: string, "usageLocation"?: string, "userPrincipalName"?: string, "userType"?: "Guest" | "Member" };

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly user?: any;

    /**
     * Whether the account is enabled
     * Default: true
     */
    readonly accountEnabled?: boolean;

    /**
     * The user principal name (UPN)
     */
    readonly userPrincipalName?: string;

    /**
     * The password for the user
     * Type options: {"password":true}
     */
    readonly password?: string;


}

