// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Mailcheck/Mailcheck.node.js' node

export const name = "mailcheck" as const;
export const description = "Consume Mailcheck API" as const;
export const version = 1 as const;
export const defaults = {"name":"Mailcheck"} as const;
export const credentials = [{"name":"mailcheckApi","required":true}] as const

/**
 * Consume Mailcheck API
 */
export interface MailcheckNodeParameters {

    /**
     * Default: "email"
     */
    readonly resource?: "email";

    /**
     * Default: "check"
     */
    readonly operation?: "check";

    /**
     * Email address to check
     */
    readonly email?: string;


}

