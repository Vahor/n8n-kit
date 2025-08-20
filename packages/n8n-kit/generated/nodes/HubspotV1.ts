// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Hubspot/V1/HubspotV1.node.js' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 1 as const;
export const defaults = {"name":"HubSpot"} as const;
export const credentials = [{"name":"hubspotApi","required":true,"testedBy":"hubspotApiTest","displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"hubspotAppToken","required":true,"testedBy":"hubspotApiTest","displayOptions":{"show":{"authentication":["appToken"]}}},{"name":"hubspotOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * undefined
 */
export interface HubspotV1NodeParameters {

    /**
     * Default: "apiKey"
     */
    readonly authentication?: "apiKey" | "appToken" | "oAuth2";

    /**
     * Default: "deal"
     */
    readonly resource?: "company" | "contact" | "contactList" | "deal" | "engagement" | "form" | "ticket";

    /**
     * Default: "upsert"
     */
    readonly operation?: "upsert" | "delete" | "get" | "getAll" | "getRecentlyCreatedUpdated" | "search" | "add" | "remove" | "create" | "getRecentlyCreated" | "getRecentlyModified" | "searchByDomain" | "update" | "getFields" | "submit";

    /**
     */
    readonly email?: string;

    /**
     * By default the response only includes the ID. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "annualRevenue"?: number, "associatedCompanyId"?: string, "city"?: string, "clickedFacebookAd"?: string, "closeDate"?: string, "companyName"?: string, "companySize"?: string, "contactOwner"?: string, "country"?: string, "customPropertiesUi"?: { "customPropertiesValues": any }, "dateOfBirth"?: string, "degree"?: string, "facebookClickId"?: string, "faxNumber"?: string, "fieldOfStudy"?: string, "firstName"?: string, "gender"?: string, "googleAdClickId"?: string, "graduationDate"?: string, "industry"?: string, "jobFunction"?: string, "jobTitle"?: string, "lastName"?: string, "leadStatus"?: string, "processingContactData"?: string, "lifeCycleStage"?: string, "maritalStatus"?: string, "membershipNote"?: string, "message"?: string, "mobilePhoneNumber"?: string, "numberOfEmployees"?: string, "originalSource"?: string, "phoneNumber"?: string, "properties"?: string[], "postalCode"?: string, "prefferedLanguage"?: string, "relationshipStatus"?: string, "salutation"?: string, "school"?: string, "seniority"?: string, "startDate"?: string, "stateRegion"?: string, "status"?: string, "streetAddress"?: string, "twitterUsername"?: string, "websiteUrl"?: string, "workEmail"?: string, "formSubmissionMode"?: "all" | "none" | "newest" | "oldest", "listMemberships"?: boolean, "propertyMode"?: "valueAndHistory" | "valueOnly", "direction"?: "ASCENDING" | "DESCENDING", "query"?: string, "sortBy"?: string, "aboutUs"?: string, "companyDomainName"?: string, "companyOwner"?: string, "countryRegion"?: string, "description"?: string, "facebookFans"?: number, "googlePlusPage"?: string, "isPublic"?: boolean, "lifecycleStatus"?: string, "linkedinBio"?: string, "linkedInCompanyPage"?: string, "originalSourceType"?: string, "streetAddress2"?: string, "targetAccount"?: string, "timezone"?: string, "totalMoneyRaised"?: number, "twitterBio"?: string, "twitterFollowers"?: number, "twitterHandle"?: string, "type"?: string, "webTechnologies"?: string, "yearFounded"?: string, "includeMergeAudits"?: boolean, "amount"?: string, "associatedCompany"?: string[], "associatedVids"?: string[], "dealName"?: string, "dealType"?: string, "pipeline"?: string, "includePropertyVersions"?: boolean, "associations"?: { "companyIds"?: string, "contactIds"?: string, "dealIds"?: string, "ownerIds"?: string, "ticketIds"?: string }, "skipValidation"?: boolean, "submittedAt"?: string, "associatedCompanyIds"?: string[], "associatedContactIds"?: string[], "category"?: string, "createDate"?: string, "priority"?: string, "resolution"?: string, "source"?: string, "ticketOwnerId"?: string, "includeDeleted"?: boolean, "propertiesWithHistory"?: string };

    /**
     * Unique identifier for a particular contact
     */
    readonly contactId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":250}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "formSubmissionMode"?: "all" | "none" | "newest" | "oldest", "listMemberships"?: boolean, "properties"?: string[], "propertyMode"?: "valueAndHistory" | "valueOnly", "since"?: string, "includePropertyVersions"?: boolean, "includeAssociations"?: boolean, "propertiesWithHistory"?: string[] };

    /**
     * When multiple filters are provided within a filterGroup, they will be combined using a logical AND operator. When multiple filterGroups are provided, they will be combined using a logical OR operator. The system supports a maximum of three filterGroups with up to three filters each. More info <a href="https://developers.hubspot.com/docs/api/crm/search">here</a>
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filterGroupsUi?: { "filterGroupsValues": any };

    /**
     * Default: "email"
     */
    readonly by?: "id" | "email";

    /**
     */
    readonly id?: string;

    /**
     */
    readonly listId?: string;

    /**
     */
    readonly name?: string;

    /**
     * Unique identifier for a particular company
     */
    readonly companyId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "aboutUs"?: string, "annualRevenue"?: number, "city"?: string, "closeDate"?: string, "companyDomainName"?: string, "companyOwner"?: string, "countryRegion"?: string, "customPropertiesUi"?: { "customPropertiesValues": any }, "description"?: string, "facebookFans"?: number, "googlePlusPage"?: string, "industry"?: string, "isPublic"?: boolean, "leadStatus"?: string, "lifecycleStatus"?: string, "linkedinBio"?: string, "linkedInCompanyPage"?: string, "name"?: string, "numberOfEmployees"?: number, "originalSourceType"?: string, "phoneNumber"?: string, "postalCode"?: string, "stateRegion"?: string, "streetAddress"?: string, "streetAddress2"?: string, "targetAccount"?: string, "timezone"?: string, "totalMoneyRaised"?: number, "twitterBio"?: string, "twitterFollowers"?: number, "twitterHandle"?: string, "type"?: string, "webTechnologies"?: string, "websiteUrl"?: string, "yearFounded"?: string, "amount"?: string, "dealName"?: string, "stage"?: string, "dealType"?: string, "pipeline"?: string, "associatedCompanyIds"?: string[], "associatedContactIds"?: string[], "category"?: string, "createDate"?: string, "pipelineId"?: string, "priority"?: string, "resolution"?: string, "source"?: string, "stageId"?: string, "ticketName"?: string, "ticketOwnerId"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "includeMergeAudits"?: boolean, "properties"?: string[], "propertiesWithHistory"?: string };

    /**
     * The company's website domain to search for, like n8n.io
     */
    readonly domain?: string;

    /**
     * The dealstage is required when creating a deal. See the CRM Pipelines API for details on managing pipelines and stages. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getDealStages"}
     */
    readonly stage?: string;

    /**
     * Unique identifier for a particular deal
     */
    readonly dealId?: string;

    /**
     */
    readonly type?: "call" | "email" | "meeting" | "task";

    /**
     * Default: {}
     */
    readonly metadata?: { "body"?: string, "forObjectType"?: "COMPANY" | "CONTACT", "status"?: "COMPLETED" | "DEFERRED" | "IN_PROGRESS" | "NOT_STARTED" | "WAITING", "subject"?: string, "bcc"?: string, "cc"?: string, "fromEmail"?: string, "firstName"?: string, "lastName"?: string, "html"?: string, "toEmail"?: string, "endTime"?: string, "internalMeetingNotes"?: string, "startTime"?: string, "title"?: string, "durationMilliseconds"?: number, "fromNumber"?: string, "recordingUrl"?: string, "toNumber"?: string };

    /**
     * Unique identifier for a particular engagement
     */
    readonly engagementId?: string;

    /**
     * The ID of the form you're sending data to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getForms"}
     */
    readonly formId?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly contextUi?: { "contextValue": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly lengalConsentUi?: { "lengalConsentValues": any, "legitimateInterestValues": any };

    /**
     * The ID of the pipeline the ticket is in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTicketPipelines"}
     */
    readonly pipelineId?: string;

    /**
     * The ID of the pipeline the ticket is in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTicketStages","loadOptionsDependsOn":["pipelineId"]}
     */
    readonly stageId?: string;

    /**
     * The ID of the pipeline the ticket is in
     */
    readonly ticketName?: string;

    /**
     * Unique identifier for a particular ticket
     */
    readonly ticketId?: string;


}

