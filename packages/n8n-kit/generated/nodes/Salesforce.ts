// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Salesforce/Salesforce.node.js' node

export const name = "salesforce" as const;
export const description = "Consume Salesforce API" as const;
export const version = 1 as const;
export const defaults = {"name":"Salesforce"} as const;
export const credentials = [{"name":"salesforceOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}},{"name":"salesforceJwtApi","required":true,"displayOptions":{"show":{"authentication":["jwt"]}}}] as const

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
    readonly operation?: "addToCampaign" | "addNote" | "create" | "upsert" | "delete" | "get" | "getAll" | "getSummary" | "update" | "addToCampaign" | "upload" | "query" | "addComment" | "invoke";

    /**
     * The field to check to see if the lead already exists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getExternalIdFields","loadOptionsDependsOn":["resource"]}
     */
    readonly externalId?: string;

    /**
     * If this value exists in the 'match against' field, update the lead. Otherwise create a new one.
     */
    readonly externalIdValue?: string;

    /**
     * Company of the lead. If person account record types have been enabled, and if the value of Company is null, the lead converts to a person account.
     */
    readonly company?: string;

    /**
     * Required. Last name of the lead. Limited to 80 characters.
     */
    readonly lastname?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "annualRevenue"?: number, "city"?: string, "country"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "email"?: string, "fax"?: number, "firstname"?: string, "hasOptedOutOfEmail"?: boolean, "hasOptedOutOfFax"?: boolean, "industry"?: string, "IsUnreadByOwner"?: boolean, "jigsaw"?: string, "leadSource"?: string, "mobilePhone"?: string, "numberOfEmployees"?: number, "owner"?: string, "phone"?: string, "postalCode"?: string, "recordTypeId"?: string, "rating"?: string, "salutation"?: string, "state"?: string, "status"?: string, "street"?: string, "title"?: string, "website"?: string, "acconuntId"?: string, "assistantName"?: string, "Assistant Phone"?: string, "birthdate"?: string, "department"?: string, "otherPostalCode"?: string, "emailBouncedReason"?: string, "firstName"?: string, "homePhone"?: string, "mailingCity"?: string, "mailingCountry"?: string, "mailingPostalCode"?: string, "mailingState"?: string, "mailingStreet"?: string, "otherCity"?: string, "otherCountry"?: string, "otherPhone"?: string, "otherState"?: string, "otherStreet"?: string, "fileExtension"?: string, "linkToObjectId"?: string, "ownerId"?: string, "accountId"?: string, "amount"?: number, "campaignId"?: string, "forecastCategoryName"?: string, "nextStep"?: string, "pricebook2Id"?: string, "probability"?: number, "type"?: "Business" | "New Business", "accountNumber"?: string, "accountSource"?: string, "billingCity"?: string, "billingCountry"?: string, "billingPostalCode"?: string, "billingState"?: string, "billingStreet"?: string, "parentId"?: string, "sicDesc"?: string, "shippingCity"?: string, "shippingCountry"?: string, "shippingPostalCode"?: string, "shippingState"?: string, "shippingStreet"?: string, "contactId"?: string, "isEscalated"?: boolean, "origin"?: string, "ParentId"?: string, "priority"?: string, "reason"?: string, "subject"?: string, "suppliedCompany"?: string, "suppliedEmail"?: string, "suppliedName"?: string, "suppliedPhone"?: string, "activityDate"?: string, "callDisposition"?: string, "callDurationInSeconds"?: number, "callObject"?: string, "callType"?: string, "isReminderSet"?: boolean, "recurrenceType"?: string, "recurrenceInstance"?: string, "recurrenceInterval"?: number, "recurrenceDayOfMonth"?: number, "recurrenceDayOfWeekMask"?: number, "recurrenceEndDateOnly"?: string, "recurrenceMonthOfYear"?: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December", "recurrenceRegeneratedType"?: "RecurrenceRegenerateAfterDueDate" | "RecurrenceRegenerateAfterToday" | "RecurrenceRegenerated", "recurrenceTimeZoneSidKey"?: string, "reminderDateTime"?: string, "whatId"?: string, "whoId"?: string, "isPrivate"?: boolean };

    /**
     * ID of Lead that needs to be fetched
     */
    readonly leadId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "annualRevenue"?: number, "city"?: string, "company"?: string, "country"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "email"?: string, "fax"?: number, "firstname"?: string, "hasOptedOutOfEmail"?: boolean, "HasOptedOutOfFax"?: boolean, "industry"?: string, "IsUnreadByOwner"?: boolean, "jigsaw"?: string, "lastname"?: string, "leadSource"?: string, "mobilePhone"?: string, "numberOfEmployees"?: number, "owner"?: string, "postalCode"?: string, "phone"?: string, "recordTypeId"?: string, "rating"?: string, "salutation"?: string, "state"?: string, "status"?: string, "street"?: string, "title"?: string, "website"?: string, "acconuntId"?: string, "assistantName"?: string, "Assistant Phone"?: string, "birthdate"?: string, "department"?: string, "emailBouncedDate"?: string, "emailBouncedReason"?: string, "firstName"?: string, "homePhone"?: string, "lastName"?: string, "mailingCity"?: string, "mailingCountry"?: string, "mailingState"?: string, "mailingStreet"?: string, "mailingPostalCode"?: string, "otherCity"?: string, "otherCountry"?: string, "otherPhone"?: string, "otherPostalCode"?: string, "otherState"?: string, "otherStreet"?: string, "accountId"?: string, "amount"?: number, "campaignId"?: string, "closeDate"?: string, "forecastCategoryName"?: string, "name"?: string, "nextStep"?: string, "pricebook2Id"?: string, "probability"?: number, "stageName"?: string, "type"?: "Business" | "New Business", "accountNumber"?: string, "accountSource"?: string, "billingCity"?: string, "billingCountry"?: string, "billingPostalCode"?: string, "billingState"?: string, "billingStreet"?: string, "ownerId"?: string, "parentId"?: string, "sicDesc"?: string, "shippingCity"?: string, "shippingCountry"?: string, "shippingPostalCode"?: string, "shippingState"?: string, "shippingStreet"?: string, "contactId"?: string, "isEscalated"?: boolean, "origin"?: string, "ParentId"?: string, "priority"?: string, "reason"?: string, "subject"?: string, "suppliedCompany"?: string, "suppliedEmail"?: string, "suppliedName"?: string, "suppliedPhone"?: string, "activityDate"?: string, "callDisposition"?: string, "callDurationInSeconds"?: number, "callObject"?: string, "callType"?: string, "isReminderSet"?: boolean, "recurrenceDayOfMonth"?: number, "recurrenceDayOfWeekMask"?: number, "recurrenceEndDateOnly"?: string, "recurrenceInstance"?: string, "recurrenceInterval"?: number, "recurrenceMonthOfYear"?: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December", "recurrenceRegeneratedType"?: "RecurrenceRegenerateAfterDueDate" | "RecurrenceRegenerateAfterToday" | "RecurrenceRegenerated", "recurrenceType"?: string, "recurrenceTimeZoneSidKey"?: string, "reminderDateTime"?: string, "whatId"?: string, "whoId"?: string, "binaryPropertyName"?: string, "isPrivate"?: boolean };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "conditionsUi"?: { "conditionValues": any }, "fields"?: string, "status"?: string, "body"?: string, "isPrivate"?: boolean, "owner"?: string, "ownerId"?: string, "commentBody"?: string, "isPublished"?: boolean };

    /**
     * ID of the campaign that needs to be fetched. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCampaigns"}
     */
    readonly campaignId?: string;

    /**
     * Title of the note
     */
    readonly title?: string;

    /**
     * ID of contact that needs to be fetched
     */
    readonly contactId?: string;

    /**
     * Name of the custom object. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCustomObjects"}
     */
    readonly customObject?: string;

    /**
     * Filter by custom fields
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly customFieldsUi?: { "customFieldsValues": any };

    /**
     * Record ID to be updated
     */
    readonly recordId?: string;

    /**
     * Name of the binary property which contains the data for the file to be uploaded
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Required. Last name of the opportunity. Limited to 80 characters.
     */
    readonly name?: string;

    /**
     * Required. Date when the opportunity is expected to close.
     */
    readonly closeDate?: string;

    /**
     * Required. Date when the opportunity is expected to close. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getStages"}
     */
    readonly stageName?: string;

    /**
     * ID of opportunity that needs to be fetched
     */
    readonly opportunityId?: string;

    /**
     * ID of account that needs to be fetched
     */
    readonly accountId?: string;

    /**
     * A SOQL query. An example query parameter string might look like: “SELECT+Name+FROM+MyObject”. If the SOQL query string is invalid, a MALFORMED_QUERY response is returned.
     */
    readonly query?: string;

    /**
     * The type of case. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCaseTypes"}
     */
    readonly type?: string;

    /**
     * ID of case that needs to be fetched
     */
    readonly caseId?: string;

    /**
     * The current status of the task, such as In Progress or Completed. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTaskStatuses"}
     */
    readonly status?: string;

    /**
     * ID of task that needs to be fetched
     */
    readonly taskId?: string;

    /**
     */
    readonly parentId?: string;

    /**
     * ID of attachment that needs to be fetched
     */
    readonly attachmentId?: string;

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

