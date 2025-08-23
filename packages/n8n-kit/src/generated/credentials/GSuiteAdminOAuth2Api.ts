// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GSuiteAdminOAuth2Api.credentials.ts' credentials

export const name = "gSuiteAdminOAuth2Api" as const;

/**
 * displayName: Google Workspace Admin OAuth2 API
 * documentationUrl: google
 */
export interface GSuiteAdminOAuth2ApiCredentials {
    /**
     * Default: "https://www.googleapis.com/auth/admin.directory.group https://www.googleapis.com/auth/admin.directory.user https://www.googleapis.com/auth/admin.directory.domain.readonly https://www.googleapis.com/auth/admin.directory.userschema.readonly https://www.googleapis.com/auth/admin.directory.device.chromeos https://www.googleapis.com/auth/admin.directory.orgunit.readonly"
     */
    readonly "scope"?: any;

    readonly __name: "gSuiteAdminOAuth2Api";
}
