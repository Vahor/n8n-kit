// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/RabbitMQ/RabbitMQTrigger.node.js' node

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
    readonly options?: { "arguments"?: { "argument": any }, "autoDelete"?: boolean, "contentIsBinary"?: boolean, "acknowledge"?: "executionFinishes" | "executionFinishesSuccessfully" | "immediately" | "laterMessageNode", "durable"?: boolean, "exclusive"?: boolean, "headers"?: { "header": any }, "jsonParseBody"?: boolean, "onlyContent"?: boolean, "parallelMessages"?: number };

    /**
     */
    readonly laterMessageNode?: string;


}

