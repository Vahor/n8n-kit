// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/WhatsApp/WhatsAppTrigger.node.ts' node

export const description = "Handle WhatsApp events via webhooks" as const;
export const type = "n8n-nodes-base.whatsAppTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"whatsAppTriggerApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface WhatsAppTriggerNodeParameters {
    /** Default: [] */
    readonly updates?: ("account_review_update" | "account_update" | "business_capability_update" | "message_template_quality_update" | "message_template_status_update" | "messages" | "phone_number_name_update" | "phone_number_quality_update" | "security" | "template_category_update")[];

    /** Default: {} */
    readonly options?: { messageStatusUpdates?: ("all" | "deleted" | "delivered" | "failed" | "read" | "sent")[] };

}
