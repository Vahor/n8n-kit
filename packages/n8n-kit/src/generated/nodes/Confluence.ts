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
    readonly resource?: "attachment" | "page" | "search" | "space";

    /** Default: "getMany" */
    readonly operation?: "delete" | "getMany" | "upload" | "addComment" | "addLabels" | "append" | "create" | "delete" | "deleteComment" | "get" | "getComments" | "getLabels" | "getManyByLabel" | "removeLabel" | "update" | "query" | "get" | "getMany";

    /**
     * The Confluence site to use. Can be left empty when the connection has access to exactly one site.
     * Default: {"mode":"list","value":""}
     */
    readonly site?: {
	value: string,
	mode: "list" | "url",
};

    /** The ID of the attachment to delete. Attachment IDs come from the Get Many operation. */
    readonly attachmentId?: string;

    /** Whether to permanently delete the attachment instead of moving it to trash. This cannot be undone and requires admin permission in the attachment's space. */
    readonly purge?: boolean;

    /**
     * Limits page selection and By Title lookups to one space. Leave empty or pick "All Spaces" to search across all spaces.
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value"]}
     */
    readonly space?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The page whose attachments to fetch
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value","space.value"]}
     */
    readonly page?: {
	value: string,
	mode: "list" | "url" | "id" | "title",
};

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Whether to also download each attachment's file and attach it to the item's binary output */
    readonly download?: boolean;

    /**
     * Use this field name in the following nodes, to use the binary file data
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /** Whether to upload without notifying watchers of the page */
    readonly minorEdit?: boolean;

    /** An optional comment to attach to this version of the file */
    readonly comment?: string;

    /** Leave empty to comment directly on a page. Set to reply to an existing footer comment; the page is inferred from the parent. */
    readonly parentCommentId?: string;

    /**
     * How the comment content below is interpreted
     * Default: "plainText"
     */
    readonly bodyFormat?: "atlas_doc_format" | "plainText" | "storage";

    /**
     * Comment content as plain text; each line becomes a paragraph. Blank lines and leading whitespace are removed.
     * Type options: {"rows":4}
     */
    readonly bodyPlainText?: string;

    /**
     * Comment content in Confluence storage format
     * Type options: {"rows":4}
     */
    readonly bodyStorage?: string;

    /** Comment content as an Atlassian Document Format document */
    readonly bodyAdf?: string;

    /** The label names to add, comma-separated for several. Label names cannot contain spaces — use an underscore or hyphen instead. Existing labels are kept. */
    readonly labels?: string;

    /** The title of the new page */
    readonly title?: string;

    /**
     * The page to create the new page under. Leave empty to create under the space homepage.
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value","space.value"]}
     */
    readonly parentPage?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Default: {} */
    readonly options?: { createAsDraft?: boolean, private?: boolean, rootLevel?: boolean } | { sortBy?: "created-date" | "modified-date", sortDirection?: "asc" | "desc" } | { prefix?: "global" | "my" | "system" | "team", sortBy?: "created-date" | "id" | "name", sortDirection?: "asc" | "desc" } | { additionalExpandFields?: string, contentStatuses?: ("archived" | "current" | "draft")[], fetchFullPageContent?: boolean } | { descriptionFormat?: "plain" | "view" };

    /** The ID of the footer comment to delete */
    readonly commentId?: string;

    /** Whether to also fetch every descendant page of the page, one item per page */
    readonly includeDescendants?: boolean;

    /**
     * Safeguard that stops the sub-tree walk after this many pages, root included
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly maxPages?: number;

    /**
     * The label whose pages to fetch
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value"]}
     */
    readonly label?: {
	value: string,
	mode: "list" | "id",
};

    /** The name of a single label to remove */
    readonly labelName?: string;

    /**
     * Whether the page is published or a draft after the update
     * Default: "keep"
     */
    readonly status?: "draft" | "keep" | "current";

    /**
     * The CQL query to run. See <a href="https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/" target="_blank">Atlassian's CQL reference</a> for the syntax.
     * Type options: {"rows":4}
     */
    readonly cql?: string;

}
