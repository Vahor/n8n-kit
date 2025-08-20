// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Strapi/Strapi.node.ts' node

export const name = "strapi" as const;
export const description = "Consume Strapi API" as const;
export const version = 1 as const;
export const defaults = {"name":"Strapi"} as const;
export const credentials = [{"name":"strapiApi","required":true,"testedBy":"strapiApiTest","displayOptions":{"show":{"authentication":["password"]}}},{"name":"strapiTokenApi","required":true,"displayOptions":{"show":{"authentication":["token"]}}}] as const

/**
 * Consume Strapi API
 */
export interface StrapiNodeParameters {

    /**
     * Default: "password"
     */
    readonly authentication?: "password" | "token";

    /**
     * Default: "entry"
     */
    readonly resource?: "entry";


}

