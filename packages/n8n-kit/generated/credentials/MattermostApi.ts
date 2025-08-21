// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MattermostApi.credentials.ts' credentials

export const name = "mattermostApi" as const;

/**
 * displayName: Mattermost API
 * documentationUrl: mattermost
 */
export interface MattermostApiNodeParameters {

    /**
     * Type options: {"password":true}
     */
    readonly accessToken?: string;

    /**
     */
    readonly baseUrl?: string;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly allowUnauthorizedCerts?: boolean;


}

