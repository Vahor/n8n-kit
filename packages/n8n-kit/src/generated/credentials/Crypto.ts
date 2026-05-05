// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Crypto.credentials.ts' credentials

export const name = "crypto" as const;

/**
 * displayName: Crypto
 * documentationUrl: crypto
 */
export interface CryptoCredentials {
    /**
     * Secret used in the Hmac action
     * Type options: {"password":true}
     */
    readonly "hmacSecret"?: string;

    /**
     * Private Key used in the Sign action
     * Type options: {"rows":4,"password":true}
     */
    readonly "signPrivateKey"?: string;

    readonly __name: "crypto";
}
