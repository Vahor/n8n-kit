// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/JwtAuth.credentials.ts' credentials

export const name = "jwtAuth" as const;

/**
 * displayName: JWT Auth
 * documentationUrl: jwt
 */
export interface JwtAuthCredentials {

    /**
     * Choose either the secret passphrase or PEM encoded public keys
     * Default: "passphrase"
     */
    readonly "keyType"?: "passphrase" | "pemKey";

    /**
     * Type options: {"password":true}
     */
    readonly "secret"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "privateKey"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "publicKey"?: string;

    /**
     * Default: "HS256"
     */
    readonly "algorithm"?: "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512" | "none";

    readonly __name: "jwtAuth";

}
