// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleCalendarOAuth2Api.credentials.ts' credentials

export const name = "googleCalendarOAuth2Api" as const;

/**
 * displayName: Google Calendar OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GoogleCalendarOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "googleCalendarOAuth2Api";
}
