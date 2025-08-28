// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleDriveOAuth2Api.credentials.ts' credentials

export const name = "googleDriveOAuth2Api" as const;

/**
 * displayName: Google Drive OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GoogleDriveOAuth2ApiCredentials {
    /** Default: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.photos.readonly" */
    readonly "scope"?: unknown;

    readonly "notice"?: string;

    readonly __name: "googleDriveOAuth2Api";
}
