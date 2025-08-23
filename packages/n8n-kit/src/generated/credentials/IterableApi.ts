// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/IterableApi.credentials.ts' credentials

export const name = "iterableApi" as const;

/**
 * displayName: Iterable API
 * documentationUrl: iterable
 */
export interface IterableApiCredentials {
    /**
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    /**
     * Default: "https://api.iterable.com"
     */
    readonly "region"?: "https://api.eu.iterable.com" | "https://api.iterable.com";

    readonly __name: "iterableApi";
}
