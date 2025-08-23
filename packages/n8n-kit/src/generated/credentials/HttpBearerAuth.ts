// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HttpBearerAuth.credentials.ts' credentials

export const name = "httpBearerAuth" as const;

/**
 * displayName: Bearer Auth
 * documentationUrl: httpRequest
 */
export interface HttpBearerAuthCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "token"?: string;

    /**
     */
    readonly "useCustomAuth"?: string;

    readonly __name: "httpBearerAuth";

}
