// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KafkaCredentials } from "../credentials/Kafka.ts";
import type { SchemaRegistryApiCredentials } from "../credentials/SchemaRegistryApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KafkaV2NodeParameters } from "../nodes/KafkaV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface KafkaV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: KafkaV2NodeParameters;
    readonly kafkaCredentials: Credentials<KafkaCredentials>;
    readonly schemaRegistryApiCredentials?: Credentials<SchemaRegistryApiCredentials>;
}

/**
 * Sends messages to a Kafka topic
 */
export class KafkaV2<L extends string, C extends IContext = never, P extends KafkaV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.kafka" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.kafkaCredentials, this.props.schemaRegistryApiCredentials];
    }

}
