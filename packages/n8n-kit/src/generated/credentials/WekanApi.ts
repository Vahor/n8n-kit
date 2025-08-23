// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/WekanApi.credentials.ts' credentials

export const name = "wekanApi" as const;

/**
 * displayName: Wekan API
 * documentationUrl: wekan
 */
export interface WekanApiCredentials {

    /**
     */
    readonly "username"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     */
    readonly "url"?: string;

    /**
     * Type options: {"expirable":true}
     */
    readonly "token"?: any;

    readonly __name: "wekanApi";

}
