// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Medium/Medium.node.ts' node

export const name = "medium" as const;
export const description = "Consume Medium API" as const;
export const version = 1 as const;
export const credentials = [{"name":"mediumApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"mediumOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * Consume Medium API
 */
export interface MediumNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "post"
     */
    readonly resource?: "post" | "publication";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "getAll";

    /**
     * Whether you are posting for a publication
     */
    readonly publication?: boolean;

    /**
     * Publication IDs. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getPublications"}
     */
    readonly publicationId?: string;

    /**
     * Title of the post. Max Length : 100 characters.
     */
    readonly title?: string;

    /**
     * The format of the content to be posted
     */
    readonly contentFormat?: "html" | "markdown";

    /**
     * The body of the post, in a valid semantic HTML fragment, or Markdown
     */
    readonly content?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "canonicalUrl"?: string, "license"?: "all-rights-reserved" | "cc-40-by" | "cc-40-by-nc" | "cc-40-by-nc-nd" | "cc-40-by-nc-sa" | "cc-40-by-nd" | "cc-40-by-sa" | "cc-40-zero" | "public-domain", "notifyFollowers"?: boolean, "publishStatus"?: "public" | "draft" | "unlisted", "tags"?: string };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":200}
     */
    readonly limit?: number;


}

