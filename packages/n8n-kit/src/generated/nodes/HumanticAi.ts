// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HumanticAI/HumanticAi.node.ts' node

export const name = "humanticAi" as const;
export const description = "Consume Humantic AI API" as const;
export const version = 1 as const;
export const credentials = [{"name":"humanticAiApi","required":true}] as const;

/**
 * Consume Humantic AI API
 */
export interface HumanticAiNodeParameters {

    /**
     * Default: "profile"
     */
    readonly resource?: "profile";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "update";

    /**
     * The LinkedIn profile URL or email ID for creating a Humantic profile. If you are sending the resume, this should be a unique string.
     */
    readonly userId?: string;

    /**
     * Whether to send a resume for a resume based analysis
     */
    readonly sendResume?: boolean;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Default: {}
     */
    readonly options?: { "persona"?: ("sales" | "hiring")[] };

    /**
     * Additional text written by the user
     */
    readonly text?: string;


}

