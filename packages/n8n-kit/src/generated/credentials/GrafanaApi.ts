// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GrafanaApi.credentials.ts' credentials

export const name = "grafanaApi" as const;

/**
 * displayName: Grafana API
 * documentationUrl: grafana
 */
export interface GrafanaApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /** Base URL of your Grafana instance */
    readonly "baseUrl": string;

    readonly __name: "grafanaApi";
}
