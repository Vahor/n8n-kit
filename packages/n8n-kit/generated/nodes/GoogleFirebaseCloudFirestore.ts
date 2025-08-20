// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Google/Firebase/CloudFirestore/GoogleFirebaseCloudFirestore.node.js' node

export const name = "googleFirebaseCloudFirestore" as const;
export const description = "Interact with Google Firebase - Cloud Firestore API" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Cloud Firestore"} as const;
export const credentials = [{"name":"googleFirebaseCloudFirestoreOAuth2Api","required":true}] as const

/**
 * Interact with Google Firebase - Cloud Firestore API
 */
export interface GoogleFirebaseCloudFirestoreNodeParameters {

    /**
     * Default: "document"
     */
    readonly resource?: "document" | "collection";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "upsert" | "delete" | "get" | "getAll" | "query";

    /**
     * As displayed in firebase console URL. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProjects"}
     */
    readonly projectId?: string;

    /**
     * Usually the provided default value will work
     * Default: "(default)"
     */
    readonly database?: string;

    /**
     * Collection name
     */
    readonly collection?: string;

    /**
     * List of attributes to save
     */
    readonly columns?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     */
    readonly documentId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Must correspond to a document ID
     */
    readonly updateKey?: string;

    /**
     * JSON query to execute
     */
    readonly query?: string;


}

