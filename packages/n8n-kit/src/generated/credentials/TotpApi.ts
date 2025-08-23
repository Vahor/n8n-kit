// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TotpApi.credentials.ts' credentials

export const name = "totpApi" as const;

/**
 * displayName: TOTP API
 * documentationUrl: totp
 */
export interface TotpApiCredentials {
    /**
     * Secret key encoded in the QR code during setup. <a href="https://github.com/google/google-authenticator/wiki/Key-Uri-Format#secret">Learn more</a>.
     * Type options: {"password":true}
     */
    readonly "secret": string;

    /**
     * Identifier for the TOTP account, in the <code>issuer:username</code> format. <a href="https://github.com/google/google-authenticator/wiki/Key-Uri-Format#label">Learn more</a>.
     */
    readonly "label": string;

    readonly __name: "totpApi";
}
