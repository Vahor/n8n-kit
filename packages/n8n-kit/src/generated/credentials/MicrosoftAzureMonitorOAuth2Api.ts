// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftAzureMonitorOAuth2Api.credentials.ts' credentials

export const name = "microsoftAzureMonitorOAuth2Api" as const;

/**
 * displayName: Microsoft Azure Monitor OAuth2 API
 * documentationUrl: microsoftazuremonitor
 */
export interface MicrosoftAzureMonitorOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: "authorizationCode" | "clientCredentials";

    readonly "tenantId": string;

    /** Default: "https://api.loganalytics.azure.com" */
    readonly "resource"?: "https://api.loganalytics.azure.com" | "https://api.loganalytics.io" | "https://monitor.azure.com" | "https://management.azure.com";

    /** Default: "=https://login.microsoftonline.com/{{$self[\"tenantId\"]}}/oauth2/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "=https://login.microsoftonline.com/{{$self[\"tenantId\"]}}/oauth2/{{$self[\"grantType\"] === \"clientCredentials\" ? \"v2.0/\" : \"\"}}token" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "={{$self[\"grantType\"] === \"clientCredentials\" ? \"\" : \"resource=\" + $self[\"resource\"]}}" */
    readonly "authQueryParameters"?: unknown;

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled. Use <code>{resource}</code> as a placeholder that will be replaced with the Resource value.
     * Default: "{resource}/.default"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{(($self[\"customScopes\"] && $self[\"enabledScopes\"] && $self[\"enabledScopes\"] !== \"{resource}/.default\") ? $self[\"enabledScopes\"] : ($self[\"grantType\"] === \"clientCredentials\" ? \"{resource}/.default\" : \"\")).replace(/\\{resource\\}/g, $self[\"resource\"])}}" */
    readonly "scope"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "microsoftAzureMonitorOAuth2Api";
}
