// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AdaloApi.credentials.ts' credentials

export const name = "adaloApi" as const;

/**
 * displayName: Adalo API
 * documentationUrl: adalo
 */
export interface AdaloApiCredentials {
    /**
     * The Adalo API is available on paid Adalo plans, find more information <a href="https://help.adalo.com/integrations/the-adalo-api" target="_blank">here</a>
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    /** You can get App ID from the URL of your app. For example, if your app URL is <strong>https://app.adalo.com/apps/1234567890/screens</strong>, then your App ID is <strong>1234567890</strong>. */
    readonly "appId"?: string;

    readonly __name: "adaloApi";
}
