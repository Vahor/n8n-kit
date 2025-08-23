// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/LinkedIn/LinkedIn.node.ts' node

export const description = "Consume LinkedIn API" as const;
export const type = "n8n-nodes-base.linkedIn" as const;
export const version = 1 as const;
export const credentials = [{"name":"linkedInOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["standard"]}}},{"name":"linkedInCommunityManagementOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["communityManagement"]}}}] as const;

/**
 * Consume LinkedIn API
 */
export interface LinkedInNodeParameters {

    /**
     * Default: "standard"
     */
    readonly authentication?: "standard" | "communityManagement";

    /**
     * Default: "post"
     */
    readonly resource?: "post";

    /**
     * Default: "create"
     */
    readonly operation?: "create";

    /**
     * If to post on behalf of a user or an organization
     * Default: "person"
     */
    readonly postAs?: "person" | "organization";

    /**
     * Person as which the post should be posted as. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getPersonUrn"}
     */
    readonly person?: string;

    /**
     * URN of Organization as which the post should be posted as
     */
    readonly organization?: string;

    /**
     * The primary content of the post
     */
    readonly text?: string;

    /**
     * Default: "NONE"
     */
    readonly shareMediaCategory?: "NONE" | "ARTICLE" | "IMAGE";

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "description"?: string, "originalUrl"?: string, "thumbnailBinaryPropertyName"?: string, "title"?: string, "visibility"?: "CONNECTIONS" | "PUBLIC" };


}

