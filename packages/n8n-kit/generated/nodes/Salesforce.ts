// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Salesforce/Salesforce.node.ts' node

export const name = "salesforce" as const;
export const description = "Consume Salesforce API" as const;
export const version = 1 as const;

/**
 * Consume Salesforce API
 */
export interface SalesforceNodeParameters {

    /**
     * OAuth Authorization Flow
     * Default: "oAuth2"
     */
    readonly authentication?: "oAuth2" | "jwt";

    /**
     * Default: "lead"
     */
    readonly resource?: "account" | "attachment" | "case" | "contact" | "customObject" | "document" | "flow" | "lead" | "opportunity" | "search" | "task" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "addToCampaign" | "addNote" | "create" | "upsert" | "delete" | "get" | "getAll" | "getSummary" | "update" | "addToCampaign" | "addNote" | "create" | "upsert" | "delete" | "get" | "getAll" | "getSummary" | "update" | "create" | "upsert" | "delete" | "get" | "getAll" | "update" | "upload" | "addNote" | "create" | "upsert" | "delete" | "get" | "getAll" | "getSummary" | "update" | "addNote" | "create" | "upsert" | "delete" | "get" | "getAll" | "getSummary" | "update" | "query" | "addComment" | "create" | "delete" | "get" | "getAll" | "getSummary" | "update" | "create" | "delete" | "get" | "getAll" | "getSummary" | "update" | "create" | "delete" | "get" | "getAll" | "getSummary" | "update" | "get" | "getAll" | "getAll" | "invoke";

    /**
     * The field to check to see if the lead already exists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getExternalIdFields","loadOptionsDependsOn":["resource"]}
     */
    readonly externalId?: string | string | string | string | string;

    /**
     * If this value exists in the 'match against' field, update the lead. Otherwise create a new one.
     */
    readonly externalIdValue?: string | string | string | string | string;

    /**
     * Company of the lead. If person account record types have been enabled, and if the value of Company is null, the lead converts to a person account.
     */
    readonly company?: string;

    /**
     * Required. Last name of the lead. Limited to 80 characters.
     */
    readonly lastname?: string | string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "annualRevenue"?: number, "city"?: string, "country"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "email"?: string, "fax"?: number, "firstname"?: string, "hasOptedOutOfEmail"?: boolean, "hasOptedOutOfFax"?: boolean, "industry"?: string, "IsUnreadByOwner"?: boolean, "jigsaw"?: string, "leadSource"?: string, "mobilePhone"?: string, "numberOfEmployees"?: number, "owner"?: string, "phone"?: string, "postalCode"?: string, "recordTypeId"?: string, "rating"?: string, "salutation"?: string, "state"?: string, "status"?: string, "street"?: string, "title"?: string, "website"?: string } | { "acconuntId"?: string, "assistantName"?: string, "Assistant Phone"?: string, "birthdate"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "department"?: string, "description"?: string, "email"?: string, "otherPostalCode"?: string | string, "emailBouncedReason"?: string, "fax"?: string, "firstName"?: string, "homePhone"?: string, "jigsaw"?: string, "leadSource"?: string, "mailingCity"?: string, "mailingCountry"?: string, "mobilePhone"?: string, "mailingPostalCode"?: string, "mailingState"?: string, "mailingStreet"?: string, "otherCity"?: string, "otherCountry"?: string, "otherPhone"?: string, "otherState"?: string, "otherStreet"?: string, "owner"?: string, "phone"?: string, "recordTypeId"?: string, "salutation"?: string, "title"?: string } | { "recordTypeId"?: string } | { "fileExtension"?: string, "linkToObjectId"?: string, "ownerId"?: string } | { "accountId"?: string, "amount"?: number, "campaignId"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "forecastCategoryName"?: string, "leadSource"?: string, "nextStep"?: string, "owner"?: string, "phone"?: string, "pricebook2Id"?: string, "probability"?: number, "type"?: "Business" | "New Business" } | { "accountNumber"?: string, "annualRevenue"?: number, "accountSource"?: string, "billingCity"?: string, "billingCountry"?: string, "billingPostalCode"?: string, "billingState"?: string, "billingStreet"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "fax"?: string, "jigsaw"?: string, "industry"?: string, "numberOfEmployees"?: number, "owner"?: string, "parentId"?: string, "phone"?: string, "recordTypeId"?: string, "sicDesc"?: string, "type"?: string, "shippingCity"?: string, "shippingCountry"?: string, "shippingPostalCode"?: string, "shippingState"?: string, "shippingStreet"?: string, "website"?: string } | { "accountId"?: string, "contactId"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "isEscalated"?: boolean, "origin"?: string, "owner"?: string, "ParentId"?: string, "priority"?: string, "reason"?: string, "recordTypeId"?: string, "status"?: string, "subject"?: string, "suppliedCompany"?: string, "suppliedEmail"?: string, "suppliedName"?: string, "suppliedPhone"?: string } | { "activityDate"?: string, "callDisposition"?: string, "callDurationInSeconds"?: number, "callObject"?: string, "callType"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "isReminderSet"?: boolean, "owner"?: string, "priority"?: string, "recurrenceType"?: string, "recurrenceInstance"?: string, "recurrenceInterval"?: number, "recurrenceDayOfMonth"?: number, "recurrenceDayOfWeekMask"?: number, "recurrenceEndDateOnly"?: string | string, "recurrenceMonthOfYear"?: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December", "recurrenceRegeneratedType"?: "RecurrenceRegenerateAfterDueDate" | "RecurrenceRegenerateAfterToday" | "RecurrenceRegenerated", "recurrenceTimeZoneSidKey"?: string, "reminderDateTime"?: string, "subject"?: string, "type"?: string, "whatId"?: string, "whoId"?: string } | { "description"?: string, "isPrivate"?: boolean, "owner"?: string };

    /**
     * ID of Lead that needs to be fetched
     */
    readonly leadId?: string | string | string | string | string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "annualRevenue"?: number, "city"?: string, "company"?: string, "country"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "email"?: string, "fax"?: number, "firstname"?: string, "hasOptedOutOfEmail"?: boolean, "HasOptedOutOfFax"?: boolean, "industry"?: string, "IsUnreadByOwner"?: boolean, "jigsaw"?: string, "lastname"?: string, "leadSource"?: string, "mobilePhone"?: string, "numberOfEmployees"?: number, "owner"?: string, "postalCode"?: string, "phone"?: string, "recordTypeId"?: string, "rating"?: string, "salutation"?: string, "state"?: string, "status"?: string, "street"?: string, "title"?: string, "website"?: string } | { "acconuntId"?: string, "assistantName"?: string, "Assistant Phone"?: string, "birthdate"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "department"?: string, "description"?: string, "email"?: string, "emailBouncedDate"?: string, "emailBouncedReason"?: string, "fax"?: string, "firstName"?: string, "homePhone"?: string, "jigsaw"?: string, "lastName"?: string, "leadSource"?: string, "mailingCity"?: string, "mailingCountry"?: string, "mailingState"?: string, "mailingStreet"?: string, "mailingPostalCode"?: string, "mobilePhone"?: string, "otherCity"?: string, "otherCountry"?: string, "otherPhone"?: string, "otherPostalCode"?: string, "otherState"?: string, "otherStreet"?: string, "owner"?: string, "phone"?: string, "recordTypeId"?: string, "salutation"?: string, "title"?: string } | { "recordTypeId"?: string } | { "accountId"?: string, "amount"?: number, "campaignId"?: string, "closeDate"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "forecastCategoryName"?: string, "leadSource"?: string, "name"?: string, "nextStep"?: string, "owner"?: string, "phone"?: string, "pricebook2Id"?: string, "probability"?: number, "stageName"?: string, "type"?: "Business" | "New Business" } | { "accountNumber"?: string, "accountSource"?: string, "annualRevenue"?: number, "billingCity"?: string, "billingCountry"?: string, "billingPostalCode"?: string, "billingState"?: string, "billingStreet"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "fax"?: string, "industry"?: string, "jigsaw"?: string, "name"?: string, "numberOfEmployees"?: number, "ownerId"?: string, "parentId"?: string, "phone"?: string, "recordTypeId"?: string, "sicDesc"?: string, "shippingCity"?: string, "shippingCountry"?: string, "shippingPostalCode"?: string, "shippingState"?: string, "shippingStreet"?: string, "type"?: string, "website"?: string } | { "accountId"?: string, "contactId"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "isEscalated"?: boolean, "origin"?: string, "owner"?: string, "ParentId"?: string, "priority"?: string, "reason"?: string, "recordTypeId"?: string, "status"?: string, "subject"?: string, "suppliedCompany"?: string, "suppliedEmail"?: string, "suppliedName"?: string, "suppliedPhone"?: string, "type"?: string } | { "activityDate"?: string, "callDisposition"?: string, "callDurationInSeconds"?: number, "callObject"?: string, "callType"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "isReminderSet"?: boolean, "owner"?: string, "priority"?: string, "status"?: string, "subject"?: string, "recurrenceDayOfMonth"?: number, "recurrenceDayOfWeekMask"?: number, "recurrenceEndDateOnly"?: string | string, "recurrenceInstance"?: string, "recurrenceInterval"?: number, "recurrenceMonthOfYear"?: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December", "recurrenceRegeneratedType"?: "RecurrenceRegenerateAfterDueDate" | "RecurrenceRegenerateAfterToday" | "RecurrenceRegenerated", "recurrenceType"?: string, "recurrenceTimeZoneSidKey"?: string, "reminderDateTime"?: string, "type"?: string, "whatId"?: string, "whoId"?: string } | { "binaryPropertyName"?: string, "description"?: string, "isPrivate"?: boolean, "name"?: string, "owner"?: string };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number | number | number | number | number | number | number | number | number | number;

    /**
     * Default: {}
     */
    readonly options?: { "conditionsUi"?: { "conditionValues": any }, "fields"?: string } | { "status"?: string } | { "body"?: string, "isPrivate"?: boolean, "owner"?: string } | { "conditionsUi"?: { "conditionValues": any }, "fields"?: string } | { "status"?: string } | { "body"?: string, "isPrivate"?: boolean, "owner"?: string } | { "conditionsUi"?: { "conditionValues": any }, "fields"?: string[] } | { "conditionsUi"?: { "conditionValues": any }, "fields"?: string } | { "body"?: string, "isPrivate"?: boolean, "owner"?: string } | { "fields"?: string, "conditionsUi"?: { "conditionValues": any } } | { "body"?: string, "isPrivate"?: boolean, "ownerId"?: string } | { "conditionsUi"?: { "conditionValues": any }, "fields"?: string } | { "commentBody"?: string, "isPublished"?: boolean } | { "conditionsUi"?: { "conditionValues": any }, "fields"?: string } | { "conditionsUi"?: { "conditionValues": any }, "fields"?: string } | { "conditionsUi"?: { "conditionValues": any }, "fields"?: string };

    /**
     * ID of the campaign that needs to be fetched. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCampaigns"}
     */
    readonly campaignId?: string | string;

    /**
     * Title of the note
     */
    readonly title?: string | string | string | string | string;

    /**
     * ID of contact that needs to be fetched
     */
    readonly contactId?: string | string | string | string | string;

    /**
     * Name of the custom object. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCustomObjects"}
     */
    readonly customObject?: string | string | string | string | string;

    /**
     * Filter by custom fields
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly customFieldsUi?: { "customFieldsValues": any } | { "customFieldsValues": any };

    /**
     * Record ID to be updated
     */
    readonly recordId?: string | string | string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string | string;

    /**
     * Required. Last name of the opportunity. Limited to 80 characters.
     */
    readonly name?: string | string | string;

    /**
     * Required. Date when the opportunity is expected to close.
     */
    readonly closeDate?: string;

    /**
     * Required. Date when the opportunity is expected to close. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getStages"}
     */
    readonly stageName?: string;

    /**
     * ID of opportunity that needs to be fetched
     */
    readonly opportunityId?: string | string | string | string;

    /**
     * ID of account that needs to be fetched
     */
    readonly accountId?: string | string | string | string;

    /**
     * A SOQL query. An example query parameter string might look like: “SELECT+Name+FROM+MyObject”. If the SOQL query string is invalid, a MALFORMED_QUERY response is returned.
     */
    readonly query?: string;

    /**
     * The type of case. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCaseTypes"}
     */
    readonly type?: string;

    /**
     * ID of case that needs to be fetched
     */
    readonly caseId?: string | string | string | string;

    /**
     * The current status of the task, such as In Progress or Completed. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTaskStatuses"}
     */
    readonly status?: string;

    /**
     * ID of task that needs to be fetched
     */
    readonly taskId?: string | string | string;

    /**
     */
    readonly parentId?: string;

    /**
     * ID of attachment that needs to be fetched
     */
    readonly attachmentId?: string | string | string;

    /**
     * ID of user that needs to be fetched
     */
    readonly userId?: string;

    /**
     * Required. API name of the flow.
     */
    readonly apiName?: string;

    /**
     * Whether the input variables should be set via the value-key pair UI or JSON/RAW
     */
    readonly jsonParameters?: boolean;

    /**
     * Input variables as JSON object
     */
    readonly variablesJson?: string;

    /**
     * The input variable to send
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly variablesUi?: { "variablesValues": any };


}

