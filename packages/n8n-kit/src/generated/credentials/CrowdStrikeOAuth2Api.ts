// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CrowdStrikeOAuth2Api.credentials.ts' credentials

export const name = "crowdStrikeOAuth2Api" as const;

/**
 * displayName: CrowdStrike OAuth2 API
 * documentationUrl: crowdstrike
 */
export interface CrowdStrikeOAuth2ApiCredentials {
    /** Type options: {"expirable":true} */
    readonly "sessionToken"?: any;

    readonly "url": string;

    readonly "clientId": string;

    /** Type options: {"password":true} */
    readonly "clientSecret": string;

    readonly __name: "crowdStrikeOAuth2Api";
}
