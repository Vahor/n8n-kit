// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MatrixApi.credentials.ts' credentials

export const name = "matrixApi" as const;

/**
 * displayName: Matrix API
 * documentationUrl: matrix
 */
export interface MatrixApiCredentials {
    /**
     * Type options: {"password":true}
     */
    readonly "accessToken"?: string;

    /**
     * Default: "https://matrix-client.matrix.org"
     */
    readonly "homeserverUrl"?: string;

    readonly __name: "matrixApi";
}
