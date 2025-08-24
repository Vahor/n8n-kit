// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KafkaCredentials } from "../credentials/Kafka.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KafkaNodeParameters } from "../nodes/Kafka";
import { Node, type NodeProps } from "../../nodes/node";

export interface KafkaProps extends NodeProps {
    readonly parameters: KafkaNodeParameters;
    readonly kafkaCredentials: Credentials<KafkaCredentials>;
}

/**
 * Sends messages to a Kafka topic
 */
export class Kafka<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.kafka" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: KafkaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.kafkaCredentials];
    }

}
