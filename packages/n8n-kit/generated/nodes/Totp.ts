// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Totp/Totp.node.ts' node

export const name = "totp" as const;
export const description = "Generate a time-based one-time password" as const;
export const version = 1 as const;
export const defaults = {"name":"TOTP"} as const;
export const credentials = [{"name":"totpApi","required":true}] as const

/**
 * Generate a time-based one-time password
 */
export interface TotpNodeParameters {

    /**
     * Default: "generateSecret"
     */
    readonly operation?: "generateSecret";

    /**
     * Default: {}
     */
    readonly options?: { "algorithm"?: "SHA1" | "SHA224" | "SHA256" | "SHA3-224" | "SHA3-256" | "SHA3-384" | "SHA3-512" | "SHA384" | "SHA512", "digits"?: number, "period"?: number };


}

