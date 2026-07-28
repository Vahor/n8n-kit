// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Calendly/v1/CalendlyTriggerV1.node.ts' node

export const description = "Starts the workflow when Calendly events occur" as const;
export const type = "n8n-nodes-base.calendlyTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"calendlyApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"calendlyOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface CalendlyTriggerV1NodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "oAuth2" | "apiKey";

    /** Default: "user" */
    readonly scope?: "organization" | "user";

    /** Default: [] */
    readonly events?: ("invitee.created" | "invitee.canceled")[];

}
