// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SupabaseApi.credentials.ts' credentials

export const name = "supabaseApi" as const;

/**
 * displayName: Supabase API
 * documentationUrl: supabase
 */
export interface SupabaseApiCredentials {
    /** Your Supabase project URL without the <code>/rest/v1</code> path. If you copied the full Data API URL, remove the <code>/rest/v1</code> suffix. */
    readonly "host"?: string;

    /**
     * Your Supabase project secret key. You can create one in the <a href="https://supabase.com/dashboard/project/_/settings/api-keys" target="_blank">API Keys settings</a> of your project. Legacy service_role secrets are also supported.
     * Type options: {"password":true}
     */
    readonly "serviceRole"?: string;

    readonly __name: "supabaseApi";
}
