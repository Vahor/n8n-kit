// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Brevo/Brevo.node.ts' node

export const name = "sendInBlue" as const;
export const description = "Consume Brevo API" as const;
export const version = 1 as const;
export const defaults = {"name":"Brevo"} as const;
export const credentials = [{"name":"sendInBlueApi","required":true}] as const

/**
 * Consume Brevo API
 */
export interface BrevoNodeParameters {

    /**
     * Default: "email"
     */
    readonly resource?: "contact" | "attribute" | "email" | "sender";


}

