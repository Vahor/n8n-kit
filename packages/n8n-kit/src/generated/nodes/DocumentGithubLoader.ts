// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/document_loaders/DocumentGithubLoader/DocumentGithubLoader.node.ts' node

export const description = "Use GitHub data as input to this chain" as const;
export const type = "@n8n/n8n-nodes-langchain.documentGithubLoader" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"githubApi","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"ai_document":"ai_document"} as const;

export interface DocumentGithubLoaderNodeParameters {
    readonly repository?: string;

    /**
     * Default: "main"
     */
    readonly branch?: string;

    /**
     * Default: "simple"
     */
    readonly textSplittingMode?: "simple" | "custom";

    /**
     * Default: {}
     */
    readonly additionalOptions?: { "recursive"?: boolean, "ignorePaths"?: string };

}
