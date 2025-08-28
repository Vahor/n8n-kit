// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftOutlookOAuth2Api.credentials.ts' credentials

export const name = "microsoftOutlookOAuth2Api" as const;

/**
 * displayName: Microsoft Outlook OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftOutlookOAuth2ApiCredentials {
    /** Default: "openid offline_access Contacts.Read Contacts.ReadWrite Calendars.Read Calendars.Read.Shared Calendars.ReadWrite Mail.ReadWrite Mail.ReadWrite.Shared Mail.Send Mail.Send.Shared MailboxSettings.Read" */
    readonly "scope"?: unknown;

    readonly "useShared"?: boolean;

    /** Target user's UPN or ID */
    readonly "userPrincipalName"?: string;

    readonly __name: "microsoftOutlookOAuth2Api";
}
