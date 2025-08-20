// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Firebase/RealtimeDatabase/GoogleFirebaseRealtimeDatabase.node.ts' node

export const name = "googleFirebaseRealtimeDatabase" as const;
export const description = "Interact with Google Firebase - Realtime Database API" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Cloud Realtime Database"} as const;
export const credentials = [{"name":"googleFirebaseRealtimeDatabaseOAuth2Api"}] as const

/**
 * Interact with Google Firebase - Realtime Database API
 */
export interface GoogleFirebaseRealtimeDatabaseNodeParameters {

    /**
     * As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProjects"}
     */
    readonly projectId: string;

    /**
     * Default: "create"
     */
    readonly operation: "create" | "delete" | "get" | "push" | "update";

    /**
     * Object path on database. Do not append .json.
     */
    readonly path: string;

    /**
     * Attributes to save
     */
    readonly attributes?: string;


}

