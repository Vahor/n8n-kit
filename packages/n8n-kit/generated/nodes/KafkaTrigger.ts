// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Kafka/KafkaTrigger.node.ts' node

export const name = "kafkaTrigger" as const;
export const description = "Consume messages from a Kafka topic" as const;
export const version = 1.1 as const;
export const defaults = {"name":"Kafka Trigger"} as const;
export const credentials = [{"name":"kafka","required":true}] as const

/**
 * Consume messages from a Kafka topic
 */
export interface KafkaTriggerNodeParameters {

    /**
     * Name of the queue of topic to consume from
     */
    readonly topic: string;

    /**
     * ID of the consumer group
     */
    readonly groupId: string;

    /**
     * Whether to use Confluent Schema Registry
     */
    readonly useSchemaRegistry?: boolean;

    /**
     * URL of the schema registry
     */
    readonly schemaRegistryUrl?: string;

    /**
     * Default: {}
     */
    readonly options?: { "allowAutoTopicCreation"?: boolean, "autoCommitThreshold"?: number, "autoCommitInterval"?: number, "heartbeatInterval"?: number, "maxInFlightRequests"?: number, "fromBeginning"?: boolean, "jsonParseMessage"?: boolean, "parallelProcessing"?: boolean, "onlyMessage"?: boolean, "returnHeaders"?: boolean, "sessionTimeout"?: number };


}

