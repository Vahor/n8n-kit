// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GongApi.credentials.ts' credentials

export const name = "gongApi" as const;

/**
 * displayName: Gong API
 * documentationUrl: gong
 */
export interface GongApiCredentials {
    /**
     * Default: "https://api.gong.io"
     */
    readonly "baseUrl"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "accessKey"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "accessKeySecret"?: string;

    readonly __name: "gongApi";
}
