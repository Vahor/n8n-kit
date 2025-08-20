// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Automizy/Automizy.node.ts' node

export const name = "automizy" as const;
export const description = "Consume Automizy API" as const;
export const version = 1 as const;
export const defaults = {"name":"Automizy"} as const;
export const credentials = [{"name":"automizyApi","required":true}] as const

/**
 * Consume Automizy API
 */
export interface AutomizyNodeParameters {

    /**
     */
    readonly deprecated?: string;

    /**
     * Default: "contact"
     */
    readonly resource?: "contact" | "list";


}

