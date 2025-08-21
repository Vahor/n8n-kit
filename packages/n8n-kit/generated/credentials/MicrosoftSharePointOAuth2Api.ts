// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftSharePointOAuth2Api.credentials.ts' credentials

export const name = "microsoftSharePointOAuth2Api" as const;

/**
 * displayName: Microsoft SharePoint OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftSharePointOAuth2ApiCredentials {

    /**
     * Default: "=openid offline_access https://{{$self.subdomain}}.sharepoint.com/.default"
     */
    readonly "scope"?: any;

    /**
     */
    readonly "subdomain"?: string;

    readonly __name: "microsoftSharePointOAuth2Api";


}

