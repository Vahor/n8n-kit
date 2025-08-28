// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Hubspot/V1/HubspotV1.node.ts' node

export const description = "Consume HubSpot API" as const;
export const type = "n8n-nodes-base.hubspot" as const;
export const version = 1 as const;
export const credentials = [{"name":"hubspotApi","required":true,"testedBy":"hubspotApiTest","displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"hubspotAppToken","required":true,"testedBy":"hubspotApiTest","displayOptions":{"show":{"authentication":["appToken"]}}},{"name":"hubspotOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface HubspotV1NodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "apiKey" | "appToken" | "oAuth2";

    /** Default: "deal" */
    readonly resource?: "company" | "contact" | "contactList" | "deal" | "engagement" | "form" | "ticket";

    /** Default: "upsert" */
    readonly operation?: "upsert" | "delete" | "get" | "getAll" | "getRecentlyCreatedUpdated" | "search" | "add" | "remove" | "create" | "delete" | "get" | "getAll" | "getRecentlyCreated" | "getRecentlyModified" | "searchByDomain" | "update" | "create" | "delete" | "get" | "getAll" | "getRecentlyCreated" | "getRecentlyModified" | "search" | "update" | "create" | "delete" | "get" | "getAll" | "getFields" | "submit" | "create" | "delete" | "get" | "getAll" | "update";

    readonly email?: string;

    /**
     * By default the response only includes the ID. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /** Default: {} */
    readonly additionalFields?: { annualRevenue?: number, associatedCompanyId?: string, city?: string, clickedFacebookAd?: string, closeDate?: string, companyName?: string, companySize?: string, contactOwner?: string, country?: string, customPropertiesUi?: { customPropertiesValues: Array<{ property?: string, value?: string }> }, dateOfBirth?: string, degree?: string, facebookClickId?: string, faxNumber?: string, fieldOfStudy?: string, firstName?: string, gender?: string, googleAdClickId?: string, graduationDate?: string, industry?: string, jobFunction?: string, jobTitle?: string, lastName?: string, leadStatus?: string, processingContactData?: string, lifeCycleStage?: string, maritalStatus?: string, membershipNote?: string, message?: string, mobilePhoneNumber?: string, numberOfEmployees?: string, originalSource?: string, phoneNumber?: string, properties?: unknown[], postalCode?: string, prefferedLanguage?: string, relationshipStatus?: string, salutation?: string, school?: string, seniority?: string, startDate?: string, stateRegion?: string, status?: string, streetAddress?: string, twitterUsername?: string, websiteUrl?: string, workEmail?: string } | { formSubmissionMode?: "all" | "none" | "newest" | "oldest", listMemberships?: boolean, properties?: unknown[], propertyMode?: "valueAndHistory" | "valueOnly" } | { direction?: "ASCENDING" | "DESCENDING", properties?: unknown[], query?: string, sortBy?: string } | { aboutUs?: string, annualRevenue?: number, city?: string, closeDate?: string, companyDomainName?: string, companyOwner?: string, countryRegion?: string, customPropertiesUi?: { customPropertiesValues: Array<{ property?: string, value?: string }> }, description?: string, facebookFans?: number, googlePlusPage?: string, industry?: string, isPublic?: boolean, leadStatus?: string, lifecycleStatus?: string, linkedinBio?: string, linkedInCompanyPage?: string, numberOfEmployees?: number, originalSourceType?: string, phoneNumber?: string, postalCode?: string, stateRegion?: string, streetAddress?: string, streetAddress2?: string, targetAccount?: string, timezone?: string, totalMoneyRaised?: number, twitterBio?: string, twitterFollowers?: number, twitterHandle?: string, type?: string, webTechnologies?: string, websiteUrl?: string, yearFounded?: string } | { includeMergeAudits?: boolean } | { amount?: string, associatedCompany?: unknown[], associatedVids?: unknown[], closeDate?: string, customPropertiesUi?: { customPropertiesValues: Array<{ property?: string, value?: string }> }, description?: string, dealName?: string, dealType?: string, pipeline?: string } | { includePropertyVersions?: boolean } | { associations?: { companyIds?: string, contactIds?: string, dealIds?: string, ownerIds?: string, ticketIds?: string } } | { skipValidation?: boolean, submittedAt?: string } | { associatedCompanyIds?: unknown[], associatedContactIds?: unknown[], category?: string, closeDate?: string, createDate?: string, description?: string, priority?: string, resolution?: string, source?: string, ticketOwnerId?: string } | { includeDeleted?: boolean, properties?: unknown[], propertiesWithHistory?: string } | { properties?: unknown[], propertiesWithHistory?: string };

    /** Unique identifier for a particular contact */
    readonly contactId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":250}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { formSubmissionMode?: "all" | "none" | "newest" | "oldest", listMemberships?: boolean, properties?: unknown[], propertyMode?: "valueAndHistory" | "valueOnly" } | { since?: string, includePropertyVersions?: boolean } | { includeAssociations?: boolean, properties?: unknown[], propertiesWithHistory?: unknown[] };

    /**
     * When multiple filters are provided within a filterGroup, they will be combined using a logical AND operator. When multiple filterGroups are provided, they will be combined using a logical OR operator. The system supports a maximum of three filterGroups with up to three filters each. More info <a href="https://developers.hubspot.com/docs/api/crm/search">here</a>
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filterGroupsUi?: { filterGroupsValues: Array<{ filtersUi?: { filterValues: Array<{ propertyName?: string, operator?: "CONTAINS_TOKEN" | "EQ" | "GT" | "GTE" | "HAS_PROPERTY" | "NOT_HAS_PROPERTY" | "LT" | "LTE" | "NEQ", value?: string }> } }> };

    /** Default: "email" */
    readonly by?: "id" | "email";

    readonly id?: string;

    readonly listId?: string;

    readonly name?: string;

    /** Unique identifier for a particular company */
    readonly companyId?: string;

    /** Default: {} */
    readonly updateFields?: { aboutUs?: string, annualRevenue?: number, city?: string, closeDate?: string, companyDomainName?: string, companyOwner?: string, countryRegion?: string, customPropertiesUi?: { customPropertiesValues: Array<{ property?: string, value?: string }> }, description?: string, facebookFans?: number, googlePlusPage?: string, industry?: string, isPublic?: boolean, leadStatus?: string, lifecycleStatus?: string, linkedinBio?: string, linkedInCompanyPage?: string, name?: string, numberOfEmployees?: number, originalSourceType?: string, phoneNumber?: string, postalCode?: string, stateRegion?: string, streetAddress?: string, streetAddress2?: string, targetAccount?: string, timezone?: string, totalMoneyRaised?: number, twitterBio?: string, twitterFollowers?: number, twitterHandle?: string, type?: string, webTechnologies?: string, websiteUrl?: string, yearFounded?: string } | { amount?: string, closeDate?: string, customPropertiesUi?: { customPropertiesValues: Array<{ property?: string, value?: string }> }, description?: string, dealName?: string, stage?: string, dealType?: string, pipeline?: string } | { associatedCompanyIds?: unknown[], associatedContactIds?: unknown[], category?: string, closeDate?: string, createDate?: string, description?: string, pipelineId?: string, priority?: string, resolution?: string, source?: string, stageId?: string, ticketName?: string, ticketOwnerId?: string };

    /** Default: {} */
    readonly options?: { includeMergeAudits?: boolean, properties?: unknown[], propertiesWithHistory?: string } | { properties?: unknown[] };

    /** The company's website domain to search for, like n8n.io */
    readonly domain?: string;

    /**
     * The dealstage is required when creating a deal. See the CRM Pipelines API for details on managing pipelines and stages. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getDealStages"}
     */
    readonly stage?: string;

    /** Unique identifier for a particular deal */
    readonly dealId?: string;

    readonly type?: "call" | "email" | "meeting" | "task";

    /** Default: {} */
    readonly metadata?: { body?: string, forObjectType?: "COMPANY" | "CONTACT", status?: "COMPLETED" | "DEFERRED" | "IN_PROGRESS" | "NOT_STARTED" | "WAITING", subject?: string } | { bcc?: string, cc?: string, fromEmail?: string, firstName?: string, lastName?: string, html?: string, subject?: string, toEmail?: string } | { body?: string, endTime?: string, internalMeetingNotes?: string, startTime?: string, title?: string } | { body?: string, durationMilliseconds?: number, fromNumber?: string, recordingUrl?: string, status?: "BUSY" | "CALLING_CRM_USER" | "CANCELED" | "COMPLETED" | "CONNECTING" | "FAILED" | "IN_PROGRESS" | "NO_ANSWER" | "QUEUED" | "RINGING", toNumber?: string };

    /** Unique identifier for a particular engagement */
    readonly engagementId?: string;

    /**
     * The ID of the form you're sending data to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getForms"}
     */
    readonly formId?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly contextUi?: { contextValue: { hutk?: string, ipAddress?: string, pageUri?: string, pageName?: string, pageId?: string, sfdcCampaignId?: string, goToWebinarWebinarKey?: string } };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly lengalConsentUi?: { lengalConsentValues: { consentToProcess?: boolean, text?: string, communicationsUi?: { communicationValues: Array<{ subscriptionTypeId?: string, value?: boolean, text?: string }> } }, legitimateInterestValues: { subscriptionTypeId?: string, value?: boolean, legalBasis?: "CUSTOMER" | "LEAD", text?: string } };

    /**
     * The ID of the pipeline the ticket is in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTicketPipelines"}
     */
    readonly pipelineId?: string;

    /**
     * The ID of the pipeline the ticket is in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTicketStages","loadOptionsDependsOn":["pipelineId"]}
     */
    readonly stageId?: string;

    /** The ID of the pipeline the ticket is in */
    readonly ticketName?: string;

    /** Unique identifier for a particular ticket */
    readonly ticketId?: string;

}
