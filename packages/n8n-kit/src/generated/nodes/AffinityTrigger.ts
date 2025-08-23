// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Affinity/AffinityTrigger.node.ts' node

export const description = "Handle Affinity events via webhooks" as const;
export const type = "n8n-nodes-base.affinityTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"affinityApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface AffinityTriggerNodeParameters {

    /**
     * Webhook events that will be enabled for that endpoint
     * Default: []
     */
    readonly events?: ("field_value.created" | "field_value.deleted" | "field_value.updated" | "field.created" | "field.deleted" | "field.updated" | "file.created" | "file.deleted" | "list_entry.created" | "list_entry.deleted" | "list.created" | "list.deleted" | "list.updated" | "note.created" | "note.deleted" | "note.updated" | "opportunity.created" | "opportunity.deleted" | "opportunity.updated" | "organization.created" | "organization.deleted" | "organization.updated" | "person.created" | "person.deleted" | "person.updated")[];


}

