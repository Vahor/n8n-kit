// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/InvoiceNinjaApi.credentials.ts' credentials

export const name = "invoiceNinjaApi" as const;

/**
 * displayName: Invoice Ninja API
 * documentationUrl: invoiceNinja
 */
export interface InvoiceNinjaApiCredentials {
    readonly "url"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiToken"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "secret"?: string;

    readonly __name: "invoiceNinjaApi";
}
