// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Amqp/Amqp.node.ts' node

export const name = "amqp" as const;
export const description = "Sends a raw-message via AMQP 1.0, executed once per item" as const;
export const version = 1 as const;
export const defaults = {"name":"AMQP Sender"} as const;
export const credentials = [{"name":"amqp","required":true,"testedBy":"amqpConnectionTest"}] as const

/**
 * Sends a raw-message via AMQP 1.0, executed once per item
 */
export interface AmqpNodeParameters {

    /**
     * Name of the queue of topic to publish to
     */
    readonly sink?: string;

    /**
     * Header parameters as JSON (flat object). Sent as application_properties in amqp-message meta info.
     */
    readonly headerParametersJson?: any;

    /**
     * Default: {}
     */
    readonly options?: { "containerId"?: string, "dataAsObject"?: boolean, "reconnect"?: boolean, "reconnectLimit"?: number, "sendOnlyProperty"?: string };


}

