// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DatadogApi.credentials.ts' credentials

export const name = "datadogApi" as const;

/**
 * displayName: Datadog API
 * documentationUrl: datadog
 */
export interface DatadogApiCredentials {

    /**
     * Default: "https://api.datadoghq.com"
     */
    readonly "url": string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /**
     * For some endpoints, you also need an Application key.
     * Type options: {"password":true}
     */
    readonly "appKey"?: string;

    readonly __name: "datadogApi";

}
