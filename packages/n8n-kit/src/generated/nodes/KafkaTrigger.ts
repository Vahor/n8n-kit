// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Kafka/KafkaTrigger.node.ts' node

export const description = "Consume messages from a Kafka topic" as const;
export const type = "n8n-nodes-base.kafkaTrigger" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"kafka","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface KafkaTriggerNodeParameters {
    /** Name of the queue of topic to consume from */
    readonly topic?: string;

    /** ID of the consumer group */
    readonly groupId?: string;

    /**
     * Select on which condition the offsets should be resolved. In the manual mode, when execution started by clicking on Execute Workflow or Execute Step button, offsets are always resolved immediately after message received.
     * Default: "onCompletion"
     */
    readonly resolveOffset?: "onCompletion" | "onSuccess" | "onStatus" | "immediately";

    /** Default: ["success"] */
    readonly allowedStatuses?: ("canceled" | "crashed" | "error" | "new" | "running" | "success" | "unknown" | "waiting")[];

    /** Whether to use Confluent Schema Registry */
    readonly useSchemaRegistry?: boolean;

    /** URL of the schema registry */
    readonly schemaRegistryUrl?: string;

    /** Default: {} */
    readonly options?: { allowAutoTopicCreation?: boolean, autoCommitThreshold?: number, autoCommitInterval?: number, batchSize?: number, eachBatchAutoResolve?: boolean, fetchMaxBytes?: number, fetchMinBytes?: number, heartbeatInterval?: number, maxInFlightRequests?: number, fromBeginning?: boolean, jsonParseMessage?: boolean, keepBinaryData?: boolean, parallelProcessing?: boolean, partitionsConsumedConcurrently?: number, onlyMessage?: boolean, returnHeaders?: boolean, rebalanceTimeout?: number, errorRetryDelay?: number, sessionTimeout?: number };

}
