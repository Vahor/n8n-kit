// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Calendly/v2/CalendlyTriggerV2.node.ts' node

export const description = "Starts the workflow when Calendly events occur" as const;
export const type = "n8n-nodes-base.calendlyTrigger" as const;
export const version = 2 as const;
export const credentials = [{"name":"calendlyOAuth2Api","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface CalendlyTriggerV2NodeParameters {
    /** Default: "user" */
    readonly scope?: "organization" | "user";

    /** Default: [] */
    readonly events?: ("invitee.created" | "invitee.canceled")[];

}
