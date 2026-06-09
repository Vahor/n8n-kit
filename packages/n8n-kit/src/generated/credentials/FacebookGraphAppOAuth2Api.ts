// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FacebookGraphAppOAuth2Api.credentials.ts' credentials

export const name = "facebookGraphAppOAuth2Api" as const;

/**
 * displayName: Facebook Graph (App) OAuth2 API
 * documentationUrl: facebookapp
 */
export interface FacebookGraphAppOAuth2ApiCredentials {
    /**
     * (Optional) When set, the node will verify incoming webhook payloads for added security
     * Type options: {"password":true}
     */
    readonly "appSecret"?: string;

    readonly __name: "facebookGraphAppOAuth2Api";
}
