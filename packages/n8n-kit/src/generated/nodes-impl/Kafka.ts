// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KafkaCredentials } from "../credentials/Kafka.ts";
import type { Credentials } from "../../credentials";
import type { KafkaNodeParameters } from "../nodes/Kafka";
import { Node, type NodeProps } from "../../nodes";

export interface KafkaProps extends NodeProps {

    readonly parameters: KafkaNodeParameters;
    readonly kafkaCredentials: Credentials<KafkaCredentials>;

}

/**
 * Sends messages to a Kafka topic
 */
export class Kafka<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.kafka" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: KafkaProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.kafkaCredentials];

    }


}
