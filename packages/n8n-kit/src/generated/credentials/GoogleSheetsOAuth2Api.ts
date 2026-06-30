// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleSheetsOAuth2Api.credentials.ts' credentials

export const name = "googleSheetsOAuth2Api" as const;

/**
 * displayName: Google Sheets OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GoogleSheetsOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.metadata"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.metadata\"}}" */
    readonly "scope"?: unknown;

    readonly "notice"?: string;

    readonly __name: "googleSheetsOAuth2Api";
}
