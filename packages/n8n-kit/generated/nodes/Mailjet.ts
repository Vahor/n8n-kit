// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Mailjet/Mailjet.node.ts' node

export const name = "mailjet" as const;
export const description = "Consume Mailjet API" as const;
export const version = 1 as const;
export const defaults = {"name":"Mailjet"} as const;
export const credentials = [{"name":"mailjetEmailApi","required":true,"displayOptions":{"show":{"resource":["email"]}}},{"name":"mailjetSmsApi","required":true,"displayOptions":{"show":{"resource":["sms"]}}}] as const

/**
 * Consume Mailjet API
 */
export interface MailjetNodeParameters {

    /**
     * Default: "email"
     */
    readonly resource?: "email" | "sms";


}

