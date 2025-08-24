// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/OdooApi.credentials.ts' credentials

export const name = "odooApi" as const;

/**
 * displayName: Odoo API
 * documentationUrl: odoo
 */
export interface OdooApiCredentials {
    readonly "url": string;

    readonly "username": string;

    /** Type options: {"password":true} */
    readonly "password": string;

    readonly "db"?: string;

    readonly __name: "odooApi";
}
