// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KafkaCredentials } from "../credentials/Kafka.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KafkaTriggerNodeParameters } from "../nodes/KafkaTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface KafkaTriggerProps extends NodeProps {
    readonly parameters: KafkaTriggerNodeParameters;
    readonly kafkaCredentials: Credentials<KafkaCredentials>;
}

/**
 * Consume messages from a Kafka topic
 */
export class KafkaTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.kafkaTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: KafkaTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.kafkaCredentials];
    }

}
