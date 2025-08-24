// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Lemlist/LemlistTrigger.node.ts' node

export const description = "Handle Lemlist events via webhooks" as const;
export const type = "n8n-nodes-base.lemlistTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"lemlistApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface LemlistTriggerNodeParameters {
    readonly event?: "*" | "contacted" | "hooked" | "attracted" | "warmed" | "interested" | "skipped" | "notInterested" | "emailsSent" | "emailsOpened" | "emailsClicked" | "emailsReplied" | "emailsBounced" | "emailsSendFailed" | "emailsFailed" | "emailsUnsubscribed" | "emailsInterested" | "emailsNotInterested" | "opportunitiesDone" | "aircallCreated" | "aircallEnded" | "aircallDone" | "aircallInterested" | "aircallNotInterested" | "apiDone" | "apiInterested" | "apiNotInterested" | "apiFailed" | "linkedinVisitDone" | "linkedinVisitFailed" | "linkedinInviteDone" | "linkedinInviteFailed" | "linkedinInviteAccepted" | "linkedinReplied" | "linkedinSent" | "linkedinVoiceNoteDone" | "linkedinVoiceNoteFailed" | "linkedinInterested" | "linkedinNotInterested" | "linkedinSendFailed" | "manualInterested" | "manualNotInterested" | "paused" | "resumed" | "customDomainErrors" | "connectionIssue" | "sendLimitReached" | "lemwarmPaused";

    /** Default: {} */
    readonly options?: { "campaignId"?: string, "isFirst"?: boolean };

}
