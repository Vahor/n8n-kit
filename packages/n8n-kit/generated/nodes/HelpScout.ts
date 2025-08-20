// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/HelpScout/HelpScout.node.ts' node

export const name = "helpScout" as const;
export const description = "Consume Help Scout API" as const;
export const version = 1 as const;
export const defaults = {"name":"Help Scout"} as const;
export const credentials = [{"name":"helpScoutOAuth2Api","required":true}] as const

/**
 * Consume Help Scout API
 */
export interface HelpScoutNodeParameters {

    /**
     * Default: "conversation"
     */
    readonly resource?: "conversation" | "customer" | "mailbox" | "thread";


}

