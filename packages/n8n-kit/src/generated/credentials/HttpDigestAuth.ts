// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HttpDigestAuth.credentials.ts' credentials

export const name = "httpDigestAuth" as const;

/**
 * displayName: Digest Auth
 * documentationUrl: httpRequest
 */
export interface HttpDigestAuthCredentials {
    readonly "user"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    readonly __name: "httpDigestAuth";
}
