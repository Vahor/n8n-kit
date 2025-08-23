// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Bannerbear/Bannerbear.node.ts' node

export const description = "Consume Bannerbear API" as const;
export const type = "n8n-nodes-base.bannerbear" as const;
export const version = 1 as const;
export const credentials = [{"name":"bannerbearApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BannerbearNodeParameters {
    /**
     * Default: "image"
     */
    readonly resource?: "image" | "template";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "get" | "getAll";

    /**
     * The template ID you want to use. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTemplates"}
     */
    readonly templateId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "metadata"?: string, "waitForImage"?: boolean, "waitForImageMaxTries"?: number, "webhookUrl"?: string };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly modificationsUi?: { "modificationsValues": any };

    /**
     * Unique identifier for the image
     */
    readonly imageId?: string;

}
