// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/PayPalApi.credentials.ts' credentials

export const name = "payPalApi" as const;

/**
 * displayName: PayPal API
 * documentationUrl: paypal
 */
export interface PayPalApiCredentials {
    readonly "clientId"?: string;

    /** Type options: {"password":true} */
    readonly "secret"?: string;

    /** Default: "live" */
    readonly "env"?: "sanbox" | "live";

    readonly __name: "payPalApi";
}
