// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleFirebaseRealtimeDatabaseOAuth2Api.credentials.ts' credentials

export const name = "googleFirebaseRealtimeDatabaseOAuth2Api" as const;

/**
 * displayName: Google Firebase Realtime Database OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GoogleFirebaseRealtimeDatabaseOAuth2ApiNodeParameters {

    /**
     * Default: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/firebase.database https://www.googleapis.com/auth/firebase"
     */
    readonly scope?: any;

    /**
     * Default: "firebaseio.com"
     */
    readonly region?: "firebaseio.com" | "europe-west1.firebasedatabase.app" | "asia-southeast1.firebasedatabase.app";


}

