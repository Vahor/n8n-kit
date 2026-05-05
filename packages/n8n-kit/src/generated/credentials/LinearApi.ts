// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/LinearApi.credentials.ts' credentials

export const name = "linearApi" as const;

/**
 * displayName: Linear API
 * documentationUrl: linear
 */
export interface LinearApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    /**
     * The signing secret is used to verify the authenticity of webhook requests sent by Linear.
     * Type options: {"password":true}
     */
    readonly "signingSecret"?: string;

    readonly __name: "linearApi";
}
