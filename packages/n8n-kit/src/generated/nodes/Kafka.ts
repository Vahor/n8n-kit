// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Kafka/Kafka.node.ts' node

export const description = "Sends messages to a Kafka topic" as const;
export const type = "n8n-nodes-base.kafka" as const;
export const version = 1 as const;
export const credentials = [{"name":"kafka","required":true,"testedBy":"kafkaConnectionTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface KafkaNodeParameters {
    /** Name of the queue of topic to publish to */
    readonly topic?: string;

    /**
     * Whether to send the data the node receives as JSON to Kafka
     * Default: true
     */
    readonly sendInputData?: boolean;

    /** The message to be sent */
    readonly message?: string;

    readonly jsonParameters?: boolean;

    /** Whether to use Confluent Schema Registry */
    readonly useSchemaRegistry?: boolean;

    /** URL of the schema registry */
    readonly schemaRegistryUrl?: string;

    /** Whether to use a message key */
    readonly useKey?: boolean;

    /** The message key */
    readonly key?: string;

    /** Namespace and Name of Schema in Schema Registry (namespace.name) */
    readonly eventName?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly headersUi?: { headerValues: Array<{ key?: string, value?: string }> };

    /** Header parameters as JSON (flat object) */
    readonly headerParametersJson?: string;

    /** Default: {} */
    readonly options?: { acks?: boolean, compression?: boolean, timeout?: number };

}
