// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FacebookGraphAppApi.credentials.ts' credentials

export const name = "facebookGraphAppApi" as const;

/**
 * displayName: Facebook Graph API (App)
 * documentationUrl: facebookapp
 */
export interface FacebookGraphAppApiCredentials {
    /**
     * (Optional) When set, the node will sign API calls and verify incoming webhook payloads for added security
     * Type options: {"password":true}
     */
    readonly "appSecret"?: string;

    readonly __name: "facebookGraphAppApi";
}
