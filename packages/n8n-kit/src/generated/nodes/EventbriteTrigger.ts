// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Eventbrite/EventbriteTrigger.node.ts' node

export const description = "Handle Eventbrite events via webhooks" as const;
export const type = "n8n-nodes-base.eventbriteTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"eventbriteApi","required":true,"displayOptions":{"show":{"authentication":["privateKey"]}}},{"name":"eventbriteOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface EventbriteTriggerNodeParameters {
    /**
     * Default: "privateKey"
     */
    readonly authentication?: "privateKey" | "oAuth2";

    /**
     * The Eventbrite Organization to work on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getOrganizations"}
     */
    readonly organization?: string;

    /**
     * Limit the triggers to this event. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["organization"],"loadOptionsMethod":"getEvents"}
     */
    readonly event?: string;

    /**
     * One or more action to subscribe to
     * Default: []
     */
    readonly actions?: ("attendee.checked_in" | "attendee.checked_out" | "attendee.updated" | "event.created" | "event.published" | "event.unpublished" | "event.updated" | "order.placed" | "order.refunded" | "order.updated" | "organizer.updated" | "ticket_class.created" | "ticket_class.deleted" | "ticket_class.updated" | "venue.updated")[];

    /**
     * By default does the webhook-data only contain the URL to receive the object data manually. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

}
