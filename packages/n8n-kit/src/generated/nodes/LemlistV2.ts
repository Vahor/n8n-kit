// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Lemlist/v2/LemlistV2.node.ts' node

export const description = "Consume the Lemlist API" as const;
export const type = "n8n-nodes-base.lemlist" as const;
export const version = 2 as const;
export const credentials = [{"name":"lemlistApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface LemlistV2NodeParameters {
    /**
     * Default: "activity"
     */
    readonly resource?: "activity" | "campaign" | "enrich" | "lead" | "team" | "unsubscribe";

    /**
     * Default: "getAll"
     */
    readonly operation?: "getAll" | "getAll" | "getStats" | "get" | "enrichLead" | "enrichPerson" | "create" | "delete" | "get" | "unsubscribe" | "get" | "getCredits" | "add" | "delete" | "getAll";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "campaignId"?: string, "isFirst"?: boolean, "leadId"?: string, "type"?: "aircallCreated" | "aircallDone" | "aircallEnded" | "aircallInterested" | "aircallNotInterested" | "apiDone" | "apiFailed" | "apiInterested" | "apiNotInterested" | "attracted" | "connectionIssue" | "contacted" | "customDomainErrors" | "emailsBounced" | "emailsClicked" | "emailsFailed" | "emailsInterested" | "emailsNotInterested" | "emailsOpened" | "emailsReplied" | "emailsSendFailed" | "emailsSent" | "emailsUnsubscribed" | "hooked" | "interested" | "lemwarmPaused" | "linkedinInterested" | "linkedinInviteAccepted" | "linkedinInviteDone" | "linkedinInviteFailed" | "linkedinNotInterested" | "linkedinReplied" | "linkedinSendFailed" | "linkedinSent" | "linkedinVisitDone" | "linkedinVisitFailed" | "linkedinVoiceNoteDone" | "linkedinVoiceNoteFailed" | "manualInterested" | "manualNotInterested" | "notInterested" | "opportunitiesDone" | "paused" | "resumed" | "sendLimitReached" | "skipped" | "warmed", "version"?: string } | { "version"?: string };

    /**
     * ID of the campaign to get stats for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getCampaigns"}
     */
    readonly campaignId?: string;

    readonly startDate?: string;

    readonly endDate?: string;

    readonly timezone?: string;

    /**
     * ID of the enrichment to retrieve
     */
    readonly enrichId?: string;

    readonly leadId?: string;

    readonly findEmail?: boolean;

    readonly verifyEmail?: boolean;

    readonly linkedinEnrichment?: boolean;

    readonly findPhone?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "email"?: string, "firstName"?: string, "lastName"?: string, "linkedinUrl"?: string, "companyName"?: string, "companyDomain"?: string } | { "companyName"?: string, "companyDomain"?: string, "deduplicate"?: boolean, "findEmail"?: boolean, "findPhone"?: boolean, "firstName"?: string, "icebreaker"?: string, "jobTitle"?: string, "lastName"?: string, "linkedinEnrichment"?: boolean, "linkedinUrl"?: string, "phone"?: string, "picture"?: string, "verifyEmail"?: boolean };

    /**
     * Email of the lead to create
     */
    readonly email?: string;

}
