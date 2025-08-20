// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Perspective/GooglePerspective.node.ts' node

export const name = "googlePerspective" as const;
export const description = "Consume Google Perspective API" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Perspective"} as const;
export const credentials = [{"name":"googlePerspectiveOAuth2Api","required":true}] as const

/**
 * Consume Google Perspective API
 */
export interface GooglePerspectiveNodeParameters {

    /**
     * Default: "analyzeComment"
     */
    readonly operation?: "analyzeComment";

    /**
     */
    readonly text?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly requestedAttributesUi?: { "requestedAttributesValues": any };

    /**
     * Default: {}
     */
    readonly options?: { "languages"?: string };


}

