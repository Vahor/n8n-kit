// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/RabbitMQ/RabbitMQTrigger.node.ts' node

export const description = "Listens to RabbitMQ messages" as const;
export const type = "n8n-nodes-base.rabbitmqTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"rabbitmq","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface RabbitMQTriggerNodeParameters {
    /**
     * The name of the queue to read from
     */
    readonly queue?: string;

    /**
     * Default: {}
     */
    readonly options?: { "arguments"?: { "argument": any }, "assertExchange"?: boolean, "assertQueue"?: boolean, "autoDelete"?: boolean, "binding"?: { "bindings": any }, "contentIsBinary"?: boolean, "acknowledge"?: "executionFinishes" | "executionFinishesSuccessfully" | "immediately" | "laterMessageNode", "durable"?: boolean, "exclusive"?: boolean, "headers"?: { "header": any }, "jsonParseBody"?: boolean, "onlyContent"?: boolean, "parallelMessages"?: number };

}
