// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MetabaseApi.credentials.ts' credentials

export const name = "metabaseApi" as const;

/**
 * displayName: Metabase API
 * documentationUrl: metabase
 */
export interface MetabaseApiNodeParameters {

    /**
     * Type options: {"expirable":true}
     */
    readonly sessionToken?: any;

    /**
     */
    readonly url?: string;

    /**
     */
    readonly username?: string;

    /**
     * Type options: {"password":true}
     */
    readonly password?: string;


}

