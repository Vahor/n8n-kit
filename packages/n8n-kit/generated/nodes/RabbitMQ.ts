// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/RabbitMQ/RabbitMQ.node.js' node

export const name = "rabbitmq" as const;
export const description = "Sends messages to a RabbitMQ topic" as const;
export const version = 1.1 as const;
export const defaults = {"name":"RabbitMQ"} as const;
export const credentials = [{"name":"rabbitmq","required":true,"testedBy":"rabbitmqConnectionTest"}] as const

/**
 * Sends messages to a RabbitMQ topic
 */
export interface RabbitMQNodeParameters {

    /**
     * Default: "sendMessage"
     */
    readonly operation?: any;

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
     * Whether to send the the data the node receives as JSON
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

