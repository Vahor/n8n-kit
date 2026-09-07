// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Confluence/Confluence.node.ts' node

export const description = "Interact with the Confluence Cloud API" as const;
export const type = "n8n-nodes-base.confluence" as const;
export const version = 1 as const;
export const credentials = [{"name":"confluenceCloudOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ConfluenceNodeParameters {
    /** Default: "page" */
    readonly resource?: "page";

    /** Default: "create" */
    readonly operation?: "create" | "get";

    /**
     * The space to create the page in
     * Default: {"mode":"list","value":""}
     */
    readonly space?: {
	value: string,
	mode: "list" | "id",
};

    /** The title of the new page */
    readonly title?: string;

    /**
     * How the page content below is interpreted
     * Default: "plainText"
     */
    readonly bodyFormat?: "atlas_doc_format" | "plainText" | "storage";

    /**
     * Page content as plain text; each line becomes a paragraph. Blank lines and leading whitespace are removed.
     * Type options: {"rows":4}
     */
    readonly bodyPlainText?: string;

    /**
     * Page content in Confluence storage format
     * Type options: {"rows":4}
     */
    readonly bodyStorage?: string;

    /** Page content as an Atlassian Document Format document */
    readonly bodyAdf?: string;

    /**
     * The page to create the new page under. Leave empty to create under the space homepage.
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["space.value"]}
     */
    readonly parentPage?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Default: {} */
    readonly options?: { createAsDraft?: boolean, private?: boolean, rootLevel?: boolean };

    /**
     * The page to fetch
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["space.value"]}
     */
    readonly page?: {
	value: string,
	mode: "list" | "url" | "id" | "title",
};

    /** Whether to also fetch every descendant page of the page, one item per page */
    readonly includeDescendants?: boolean;

    /**
     * Safeguard that stops the sub-tree walk after this many pages, root included
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly maxPages?: number;

}
