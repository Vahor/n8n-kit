// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/RabbitMQ/RabbitMQTrigger.node.ts' node

export const name = "rabbitmqTrigger" as const;
export const description = "Listens to RabbitMQ messages" as const;
export const version = 1 as const;
export const defaults = {"name":"RabbitMQ Trigger"} as const;
export const credentials = [{"name":"rabbitmq","required":true}] as const

/**
 * Listens to RabbitMQ messages
 */
export interface RabbitMQTriggerNodeParameters {

    /**
     * The name of the queue to read from
     */
    readonly queue?: string;

    /**
     * Default: {}
     */
    readonly options?: any[];

    /**
     */
    readonly laterMessageNode?: string;


}

