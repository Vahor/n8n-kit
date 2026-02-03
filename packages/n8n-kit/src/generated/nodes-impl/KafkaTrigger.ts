// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KafkaCredentials } from "../credentials/Kafka.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KafkaTriggerNodeParameters } from "../nodes/KafkaTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface KafkaTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: KafkaTriggerNodeParameters;
    readonly kafkaCredentials: Credentials<KafkaCredentials>;
}

/**
 * Consume messages from a Kafka topic
 */
export class KafkaTrigger<L extends string, C extends IContext = never, P extends KafkaTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.kafkaTrigger" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.kafkaCredentials];
    }

}
