// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ConvertKit/ConvertKitTrigger.node.ts' node

export const name = "convertKitTrigger" as const;
export const description = "Handle ConvertKit events via webhooks" as const;
export const version = 1 as const;
export const credentials = [{"name":"convertKitApi","required":true}] as const;

/**
 * Handle ConvertKit events via webhooks
 */
export interface ConvertKitTriggerNodeParameters {

    /**
     * The events that can trigger the webhook and whether they are enabled
     */
    readonly event: "formSubscribe" | "linkClick" | "productPurchase" | "purchaseCreate" | "courseComplete" | "courseSubscribe" | "subscriberActivate" | "subscriberUnsubscribe" | "tagAdd" | "tagRemove";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getForms"}
     */
    readonly formId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getSequences"}
     */
    readonly courseId?: string;

    /**
     * The URL of the initiating link
     */
    readonly link?: string;

    readonly productId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTags"}
     */
    readonly tagId?: string;


}

