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


}

