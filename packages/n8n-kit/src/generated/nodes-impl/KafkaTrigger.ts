// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KafkaCredentials } from "../credentials/Kafka.ts";
import type { Credentials } from "../../credentials";
import type { KafkaTriggerNodeParameters } from "../nodes/KafkaTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface KafkaTriggerProps extends NodeProps, KafkaTriggerNodeParameters {

    readonly kafkaCredentials: Credentials<KafkaCredentials>;

}

export class KafkaTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.kafkaTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props: KafkaTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<KafkaTriggerNodeParameters, "kafkaCredentials"> {

        const { kafkaCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.kafkaCredentials];

    }


}
