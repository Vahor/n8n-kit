// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/Entra/MicrosoftEntra.node.ts' node

export const name = "microsoftEntra" as const;
export const description = "Interact with Microsoft Entra ID API" as const;
export const version = 1 as const;
export const defaults = {"name":"Microsoft Entra ID"} as const;
export const credentials = [{"name":"microsoftEntraOAuth2Api","required":true}] as const

/**
 * Interact with Microsoft Entra ID API
 */
export interface MicrosoftEntraNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "group" | "user";


}

