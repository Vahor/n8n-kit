// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Amqp/AmqpTrigger.node.ts' node

export const name = "amqpTrigger" as const;
export const description = "Listens to AMQP 1.0 Messages" as const;
export const version = 1 as const;
export const defaults = {"name":"AMQP Trigger"} as const;
export const credentials = [{"name":"amqp","required":true}] as const

/**
 * Listens to AMQP 1.0 Messages
 */
export interface AmqpTriggerNodeParameters {

    /**
     * Name of the queue of topic to listen to
     */
    readonly sink?: string;

    /**
     * Leave empty for non-durable topic subscriptions or queues
     */
    readonly clientname?: string;

    /**
     * Leave empty for non-durable topic subscriptions or queues
     */
    readonly subscription?: string;

    /**
     * Default: {}
     */
    readonly options?: { "containerId"?: string, "jsonConvertByteArrayToString"?: boolean, "jsonParseBody"?: boolean, "pullMessagesNumber"?: number, "onlyBody"?: boolean, "parallelProcessing"?: boolean, "reconnect"?: boolean, "reconnectLimit"?: number, "sleepTime"?: number };


}

