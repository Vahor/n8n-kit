// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MistApi.credentials.ts' credentials

export const name = "mistApi" as const;

/**
 * displayName: Mist API
 * documentationUrl: mist
 */
export interface MistApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "token": string;

    /**
     * Default: "eu"
     */
    readonly "region"?: "eu" | "global";

    readonly __name: "mistApi";

}
