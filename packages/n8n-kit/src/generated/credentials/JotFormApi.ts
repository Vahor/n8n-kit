// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/JotFormApi.credentials.ts' credentials

export const name = "jotFormApi" as const;

/**
 * displayName: JotForm API
 * documentationUrl: jotForm
 */
export interface JotFormApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    /**
     * The API domain to use. Use "eu-api.jotform.com" if your account is in based in Europe.
     * Default: "api.jotform.com"
     */
    readonly "apiDomain"?: "api.jotform.com" | "eu-api.jotform.com" | "hipaa-api.jotform.com";

    readonly __name: "jotFormApi";
}
