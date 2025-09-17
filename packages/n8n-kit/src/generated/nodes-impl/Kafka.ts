// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KafkaCredentials } from "../credentials/Kafka.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KafkaNodeParameters } from "../nodes/Kafka";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface KafkaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: KafkaNodeParameters;
    readonly kafkaCredentials: Credentials<KafkaCredentials>;
}

/**
 * Sends messages to a Kafka topic
 */
export class Kafka<L extends string, C extends IContext = never, P extends KafkaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.kafka" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.kafkaCredentials];
    }

}
