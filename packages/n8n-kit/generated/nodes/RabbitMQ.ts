// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/RabbitMQ/RabbitMQ.node.ts' node

export const name = "rabbitmq" as const;
export const description = "Sends messages to a RabbitMQ topic" as const;
export const version = 1.1 as const;

/**
 * Sends messages to a RabbitMQ topic
 */
export interface RabbitMQNodeParameters {

    /**
     * Default: "sendMessage"
     */
    readonly operation?: any | "sendMessage" | "deleteMessage";

    /**
     */
    readonly deleteMessage?: string;

    /**
     * To where data should be moved
     * Default: "queue"
     */
    readonly mode?: "queue" | "exchange";

    /**
     * Name of the queue to publish to
     */
    readonly queue?: string;

    /**
     * Name of the exchange to publish to
     */
    readonly exchange?: string;

    /**
     * Type of exchange
     * Default: "fanout"
     */
    readonly exchangeType?: "direct" | "topic" | "headers" | "fanout";

    /**
     * The routing key for the message
     */
    readonly routingKey?: string;

    /**
     * Whether to send the data the node receives as JSON
     * Default: true
     */
    readonly sendInputData?: boolean;

    /**
     * The message to be sent
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly options?: { "alternateExchange"?: string, "arguments"?: { "argument": any }, "autoDelete"?: boolean, "durable"?: boolean, "exclusive"?: boolean, "headers"?: { "header": any } };


}

