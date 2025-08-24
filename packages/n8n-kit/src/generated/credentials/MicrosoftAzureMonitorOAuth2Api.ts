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
    readonly "authUrl"?: any;

    /** Default: "=https://login.microsoftonline.com/{{$self[\"tenantId\"]}}/oauth2/{{$self[\"grantType\"] === \"clientCredentials\" ? \"v2.0/\" : \"\"}}token" */
    readonly "accessTokenUrl"?: any;

    /** Default: "={{$self[\"grantType\"] === \"clientCredentials\" ? \"\" : \"resource=\" + $self[\"resource\"]}}" */
    readonly "authQueryParameters"?: any;

    /** Default: "={{$self[\"grantType\"] === \"clientCredentials\" ? $self[\"resource\"] + \"/.default\" : \"\"}}" */
    readonly "scope"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    readonly __name: "microsoftAzureMonitorOAuth2Api";
}
