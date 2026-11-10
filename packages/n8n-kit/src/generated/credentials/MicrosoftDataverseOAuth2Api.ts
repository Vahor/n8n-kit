// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftDataverseOAuth2Api.credentials.ts' credentials

export const name = "microsoftDataverseOAuth2Api" as const;

/**
 * displayName: Microsoft Dataverse OAuth2 API
 * documentationUrl: microsoftdataverse
 */
export interface MicrosoftDataverseOAuth2ApiCredentials {
    /**
     * OAuth2 flow to use. "Authorization Code" signs in as a real user and uses refresh tokens for long-lived workflows (recommended). "Client Credentials" acts as the application itself — no signed-in user, access token re-acquired silently on expiry.
     * Default: "authorizationCode"
     */
    readonly "grantType"?: "authorizationCode" | "clientCredentials";

    /**
     * Microsoft Entra tenant ID (GUID) or verified domain (e.g. contoso.onmicrosoft.com). Find it at portal.azure.com → Microsoft Entra ID → Overview.
     * Default: "common"
     */
    readonly "tenantId": string;

    /** Base URL of your Dataverse environment. Find it in Power Platform admin center under your environment details, or inside the environment at Settings → Session details. */
    readonly "environmentUrl": string;

    /**
     * The Microsoft national cloud your Dataverse environment lives in. Controls the Entra login host used for authentication.
     * Default: "global"
     */
    readonly "cloud"?: "global" | "usgov" | "dod" | "china";

    /** Default: "={{ ($self[\"cloud\"] === \"china\" ? \"https://login.partner.microsoftonline.cn\" : ($self[\"cloud\"] === \"usgov\" || $self[\"cloud\"] === \"dod\" ? \"https://login.microsoftonline.us\" : \"https://login.microsoftonline.com\")) + \"/\" + $self[\"tenantId\"].trim() + \"/oauth2/v2.0/authorize\" }}" */
    readonly "authUrl"?: unknown;

    /** Default: "={{ ($self[\"cloud\"] === \"china\" ? \"https://login.partner.microsoftonline.cn\" : ($self[\"cloud\"] === \"usgov\" || $self[\"cloud\"] === \"dod\" ? \"https://login.microsoftonline.us\" : \"https://login.microsoftonline.com\")) + \"/\" + $self[\"tenantId\"].trim() + \"/oauth2/v2.0/token\" }}" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "={{ $self[\"environmentUrl\"].trim().replace(/\\/+$/, \"\") + \"/.default\" + ($self[\"grantType\"] === \"clientCredentials\" ? \"\" : \" offline_access\") }}" */
    readonly "scope"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    /** Default: "https://graph.microsoft.com" */
    readonly "graphApiBaseUrl"?: unknown;

    readonly __name: "microsoftDataverseOAuth2Api";
}
