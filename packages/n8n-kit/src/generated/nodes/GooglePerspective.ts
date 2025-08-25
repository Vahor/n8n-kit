// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Perspective/GooglePerspective.node.ts' node

export const description = "Consume Google Perspective API" as const;
export const type = "n8n-nodes-base.googlePerspective" as const;
export const version = 1 as const;
export const credentials = [{"name":"googlePerspectiveOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GooglePerspectiveNodeParameters {
    /** Default: "analyzeComment" */
    readonly operation?: "analyzeComment";

    readonly text?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly requestedAttributesUi?: { requestedAttributesValues: { attributeName?: "flirtation" | "identity_attack" | "insult" | "profanity" | "severe_toxicity" | "sexually_explicit" | "threat" | "toxicity", scoreThreshold?: number } };

    /** Default: {} */
    readonly options?: { languages?: string };

}
