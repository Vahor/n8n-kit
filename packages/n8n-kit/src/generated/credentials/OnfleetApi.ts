// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/OnfleetApi.credentials.ts' credentials

export const name = "onfleetApi" as const;

/**
 * displayName: Onfleet API
 * documentationUrl: onfleet
 */
export interface OnfleetApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    /**
     * Used to verify webhook authenticity. Found in Onfleet under Settings → API & Webhooks.
     * Type options: {"password":true}
     */
    readonly "signingSecret"?: string;

    readonly __name: "onfleetApi";
}
