// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Docs/GoogleDocs.node.ts' node

export const name = "googleDocs" as const;
export const description = "Consume Google Docs API." as const;
export const version = 2 as const;
export const defaults = {"name":"Google Docs"} as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleDocsOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume Google Docs API.
 */
export interface GoogleDocsNodeParameters {

    /**
     * Default: "serviceAccount"
     */
    readonly authentication?: "serviceAccount" | "oAuth2" | "oAuth2";

    /**
     * Default: "document"
     */
    readonly resource?: "document";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: "myDrive"
     * Type options: {"loadOptionsMethod":"getDrives"}
     */
    readonly driveId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["driveId"],"loadOptionsMethod":"getFolders"}
     */
    readonly folderId?: string;

    /**
     */
    readonly title?: string;

    /**
     * The ID in the document URL (or just paste the whole URL)
     */
    readonly documentURL?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Actions applied to update the document
     * Default: {"actionFields":[{"object":"text","action":"insert","locationChoice":"endOfSegmentLocation","index":0,"text":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly actionsUi?: { "actionFields": any };

    /**
     * Default: {}
     */
    readonly updateFields?: { "writeControlObject": any };


}

