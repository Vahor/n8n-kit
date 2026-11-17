// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftWorkIqOAuth2Api.credentials.ts' credentials

export const name = "microsoftWorkIqOAuth2Api" as const;

/**
 * displayName: Microsoft Work IQ OAuth2 API
 * documentationUrl: microsoftworkiq
 */
export interface MicrosoftWorkIqOAuth2ApiCredentials {
    /**
     * Microsoft Entra tenant ID (GUID) or verified domain (e.g. contoso.onmicrosoft.com). Find it at portal.azure.com → Microsoft Entra ID → Overview.
     * Default: "organizations"
     */
    readonly "tenantId": string;

    readonly "accessNotice"?: string;

    /**
     * Which Work IQ permissions to request. Each one needs tenant admin consent on the app registration before anyone can sign in.
     * Default: "agent"
     */
    readonly "accessLevel"?: "agent" | "read" | "act";

    /** Default: "={{ \"https://login.microsoftonline.com/\" + $self[\"tenantId\"].trim() + \"/oauth2/v2.0/authorize\" }}" */
    readonly "authUrl"?: unknown;

    /** Default: "={{ \"https://login.microsoftonline.com/\" + $self[\"tenantId\"].trim() + \"/oauth2/v2.0/token\" }}" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "={{ \"api://workiq.svc.cloud.microsoft/WorkIQAgent.Ask\" + ($self[\"accessLevel\"] === \"act\" ? \" api://workiq.svc.cloud.microsoft/WorkIQ.Act\" : $self[\"accessLevel\"] === \"read\" ? \" api://workiq.svc.cloud.microsoft/WorkIQ.Read\" : \"\") + \" offline_access\" }}" */
    readonly "scope"?: unknown;

    /** Default: "https://graph.microsoft.com" */
    readonly "graphApiBaseUrl"?: unknown;

    readonly __name: "microsoftWorkIqOAuth2Api";
}
