// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Jwt/Jwt.node.ts' node

export const name = "jwt" as const;
export const description = "JWT" as const;
export const version = 1 as const;
export const defaults = {"name":"JWT"} as const;
export const credentials = [{"name":"jwtAuth","required":true}] as const

/**
 * JWT
 */
export interface JwtNodeParameters {

    /**
     * Default: "sign"
     */
    readonly operation?: "decode" | "sign" | "verify";

    /**
     * Whether to use JSON to build the claims
     */
    readonly useJson?: boolean;

    /**
     * Default: {}
     */
    readonly claims?: { "audience"?: string, "expiresIn"?: number, "issuer"?: string, "jwtid"?: string, "notBefore"?: number, "subject"?: string };

    /**
     * Claims to add to the token in JSON format
     * Default: "{\n  \"my_field_1\": \"value 1\",\n  \"my_field_2\": \"value 2\"\n}\n"
     * Type options: {"rows":5}
     */
    readonly claimsJson?: string;

    /**
     * The token to verify or decode
     * Type options: {"password":true}
     */
    readonly token?: string;

    /**
     * Default: {}
     */
    readonly options?: { "complete"?: boolean, "ignoreExpiration"?: boolean, "ignoreNotBefore"?: boolean, "clockTolerance"?: number, "kid"?: string, "algorithm"?: "ES256" | "ES384" | "ES512" | "HS256" | "HS384" | "HS512" | "PS256" | "PS384" | "PS512" | "RS256" | "RS384" | "RS512" };


}

