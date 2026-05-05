// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/StripeApi.credentials.ts' credentials

export const name = "stripeApi" as const;

/**
 * displayName: Stripe API
 * documentationUrl: stripe
 */
export interface StripeApiCredentials {
    /** Type options: {"password":true} */
    readonly "secretKey"?: string;

    /**
     * The signature secret is used to verify the authenticity of requests sent by Stripe.
     * Type options: {"password":true}
     */
    readonly "signatureSecret"?: string;

    readonly "notice"?: string;

    readonly __name: "stripeApi";
}
