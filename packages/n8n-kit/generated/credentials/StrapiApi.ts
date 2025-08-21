// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/StrapiApi.credentials.ts' credentials

export const name = "strapiApi" as const;

/**
 * displayName: Strapi API
 * documentationUrl: strapi
 */
export interface StrapiApiCredentials {

    /**
     */
    readonly "notice"?: string;

    /**
     */
    readonly "email"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     */
    readonly "url"?: string;

    /**
     * The version of api to be used
     * Default: "v3"
     */
    readonly "apiVersion"?: "v4" | "v3";

    readonly __name: "strapiApi";


}

