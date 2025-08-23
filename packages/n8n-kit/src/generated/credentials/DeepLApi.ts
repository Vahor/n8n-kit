// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DeepLApi.credentials.ts' credentials

export const name = "deepLApi" as const;

/**
 * displayName: DeepL API
 * documentationUrl: deepL
 */
export interface DeepLApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    /**
     * Default: "pro"
     */
    readonly "apiPlan"?: "pro" | "free";

    readonly __name: "deepLApi";


}

