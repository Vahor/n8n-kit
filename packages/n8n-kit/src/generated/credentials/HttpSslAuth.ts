// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HttpSslAuth.credentials.ts' credentials

export const name = "httpSslAuth" as const;

/**
 * displayName: SSL Certificates
 * documentationUrl: httprequest
 */
export interface HttpSslAuthCredentials {
    /**
     * Certificate Authority certificate
     * Type options: {"password":true}
     */
    readonly "ca"?: string;

    /** Type options: {"password":true} */
    readonly "cert"?: string;

    /** Type options: {"password":true} */
    readonly "key"?: string;

    /**
     * Optional passphrase for the private key, if the private key is encrypted
     * Type options: {"password":true}
     */
    readonly "passphrase"?: string;

    readonly __name: "httpSslAuth";
}
