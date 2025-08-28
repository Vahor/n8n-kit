// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Zendesk/ZendeskTrigger.node.ts' node

export const description = "Handle Zendesk events via webhooks" as const;
export const type = "n8n-nodes-base.zendeskTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"zendeskApi","required":true,"displayOptions":{"show":{"authentication":["apiToken"]}}},{"name":"zendeskOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface ZendeskTriggerNodeParameters {
    /** Default: "apiToken" */
    readonly authentication?: "apiToken" | "oAuth2";

    /** Default: "support" */
    readonly service?: "support";

    /** Default: {} */
    readonly options?: { fields?: unknown[] };

    /**
     * The condition to set
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly conditions?: { all: Array<{ resource?: "ticket", field?: "assignee" | "group" | "priority" | "status" | "type", operation?: "changed" | "value_previous" | "value" | "greater_than" | "is" | "is_not" | "less_than" | "not_changed" | "not_value_previous" | "not_value" | "changed" | "value_previous" | "value" | "is" | "is_not" | "not_changed" | "not_value_previous" | "not_value", value?: "closed" | "new" | "open" | "pending" | "solved" | "question" | "incident" | "problem" | "task" | "low" | "normal" | "high" | "urgent" | string }>, any: Array<{ resource?: "ticket", field?: "assignee" | "group" | "priority" | "status" | "type", operation?: "changed" | "value_previous" | "value" | "greater_than" | "is" | "is_not" | "less_than" | "not_changed" | "not_value_previous" | "not_value" | "changed" | "value_previous" | "value" | "is" | "is_not" | "not_changed" | "not_value_previous" | "not_value", value?: "closed" | "new" | "open" | "pending" | "solved" | "question" | "incident" | "problem" | "task" | "low" | "normal" | "high" | "urgent" | string }> };

}
