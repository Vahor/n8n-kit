// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ERPNextApi.credentials.ts' credentials

export const name = "erpNextApi" as const;

/**
 * displayName: ERPNext API
 * documentationUrl: erpnext
 */
export interface ERPNextApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    /** Type options: {"password":true} */
    readonly "apiSecret"?: string;

    /** Default: "cloudHosted" */
    readonly "environment"?: "cloudHosted" | "selfHosted";

    /** Subdomain of cloud-hosted ERPNext instance. For example, "n8n" is the subdomain in: <code>https://n8n.erpnext.com</code> */
    readonly "subdomain"?: string;

    /**
     * Domain for your cloud hosted ERPNext instance.
     * Default: "erpnext.com"
     */
    readonly "domain"?: "erpnext.com" | "frappe.cloud";

    /** Whether to connect even if SSL certificate validation is not possible */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "erpNextApi";
}
