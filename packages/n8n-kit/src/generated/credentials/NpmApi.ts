// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/NpmApi.credentials.ts' credentials

export const name = "npmApi" as const;

/**
 * displayName: Npm API
 * documentationUrl: npm
 */
export interface NpmApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "accessToken"?: string;

    /**
     * Default: "https://registry.npmjs.org"
     */
    readonly "registryUrl"?: string;

    readonly __name: "npmApi";


}

