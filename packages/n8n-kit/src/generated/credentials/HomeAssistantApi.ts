// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HomeAssistantApi.credentials.ts' credentials

export const name = "homeAssistantApi" as const;

/**
 * displayName: Home Assistant API
 * documentationUrl: homeassistant
 */
export interface HomeAssistantApiCredentials {
    readonly "host"?: string;

    /** Default: 8123 */
    readonly "port"?: number;

    readonly "ssl"?: boolean;

    /** Type options: {"password":true} */
    readonly "accessToken"?: string;

    readonly __name: "homeAssistantApi";
}
