// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftDynamicsOAuth2Api.credentials.ts' credentials

export const name = "microsoftDynamicsOAuth2Api" as const;

/**
 * displayName: Microsoft Dynamics OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftDynamicsOAuth2ApiCredentials {
    readonly "subdomain": string;

    /** Default: "crm.dynamics.com" */
    readonly "region"?: "crm5.dynamics.com" | "crm6.dynamics.com" | "crm3.dynamics.com" | "crm.dynamics.cn" | "crm4.dynamics.com" | "crm12.dynamics.com" | "crm16.dynamics.com" | "crm8.dynamics.com" | "crm7.dynamics.com" | "crm.microsoftdynamics.de" | "crm.dynamics.com" | "crm9.dynamics.com" | "crm14.dynamics.com" | "crm2.dynamics.com" | "crm17.dynamics.com" | "crm15.dynamics.com" | "crm11.dynamics.com" | "crm.microsoftdynamics.us";

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled. Use <code>{subdomain}</code> and <code>{region}</code> as placeholders that will be replaced with the Subdomain and Region values.
     * Default: "openid offline_access https://{subdomain}.{region}/.default"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{(($self[\"customScopes\"] && $self[\"enabledScopes\"]) ? $self[\"enabledScopes\"] : \"openid offline_access https://{subdomain}.{region}/.default\").replace(/\\{subdomain\\}/g, $self[\"subdomain\"]).replace(/\\{region\\}/g, $self[\"region\"])}}" */
    readonly "scope"?: unknown;

    /** Default: "https://graph.microsoft.com" */
    readonly "graphApiBaseUrl"?: unknown;

    readonly __name: "microsoftDynamicsOAuth2Api";
}
