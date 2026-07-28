// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/OdooApiKeyApi.credentials.ts' credentials

export const name = "odooApiKeyApi" as const;

/**
 * displayName: Odoo API (API Key)
 * documentationUrl: odoo
 */
export interface OdooApiKeyApiCredentials {
    readonly "apiNotice"?: string;

    readonly "url": string;

    /** Leave blank to auto-detect from the Site URL (e.g. my-organization). Required for self-hosted instances with multiple databases. */
    readonly "db"?: string;

    /**
     * Generate an API key in Odoo at Settings &gt; Technical &gt; API Keys. Requires Odoo 19+.
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    readonly __name: "odooApiKeyApi";
}
