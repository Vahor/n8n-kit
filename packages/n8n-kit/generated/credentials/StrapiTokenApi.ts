// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/StrapiTokenApi.credentials.ts' credentials

export const name = "strapiTokenApi" as const;

/**
 * displayName: Strapi API Token
 * documentationUrl: strapi
 */
export interface StrapiTokenApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "apiToken"?: string;

    /**
     */
    readonly "url"?: string;

    /**
     * The version of api to be used
     * Default: "v3"
     */
    readonly "apiVersion"?: "v4" | "v3";

    readonly __name: "strapiTokenApi";


}

