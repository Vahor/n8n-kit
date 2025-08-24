// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CustomerIoApi.credentials.ts' credentials

export const name = "customerIoApi" as const;

/**
 * displayName: Customer.io API
 * documentationUrl: customerIo
 */
export interface CustomerIoApiCredentials {
    /**
     * Required for tracking API
     * Type options: {"password":true}
     */
    readonly "trackingApiKey": string;

    /**
     * Should be set based on your account region
     * Default: "track.customer.io"
     */
    readonly "region": "track-eu.customer.io" | "track.customer.io";

    /** Required for tracking API */
    readonly "trackingSiteId"?: string;

    /**
     * Required for App API
     * Type options: {"password":true}
     */
    readonly "appApiKey"?: string;

    readonly __name: "customerIoApi";
}
