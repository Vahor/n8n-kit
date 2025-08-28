// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftEntraOAuth2Api.credentials.ts' credentials

export const name = "microsoftEntraOAuth2Api" as const;

/**
 * displayName: Microsoft Entra ID (Azure Active Directory) API
 * documentationUrl: microsoftentra
 */
export interface MicrosoftEntraOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "openid offline_access AccessReview.ReadWrite.All Directory.ReadWrite.All NetworkAccessPolicy.ReadWrite.All DelegatedAdminRelationship.ReadWrite.All EntitlementManagement.ReadWrite.All User.ReadWrite.All Directory.AccessAsUser.All Sites.FullControl.All GroupMember.ReadWrite.All"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"openid offline_access AccessReview.ReadWrite.All Directory.ReadWrite.All NetworkAccessPolicy.ReadWrite.All DelegatedAdminRelationship.ReadWrite.All EntitlementManagement.ReadWrite.All User.ReadWrite.All Directory.AccessAsUser.All Sites.FullControl.All GroupMember.ReadWrite.All\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "microsoftEntraOAuth2Api";
}
