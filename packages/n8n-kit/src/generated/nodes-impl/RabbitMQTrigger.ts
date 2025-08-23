// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RabbitmqCredentials } from "../credentials/RabbitMQ.ts";
import type { Credentials } from "../../credentials";
import type { RabbitMQTriggerNodeParameters } from "../nodes/RabbitMQTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface RabbitMQTriggerProps extends NodeProps, RabbitMQTriggerNodeParameters {

    readonly rabbitmqCredentials: Credentials<RabbitmqCredentials>;

}

export class RabbitMQTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.rabbitmqTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: RabbitMQTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { rabbitmqCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.rabbitmqCredentials];

    }


}

