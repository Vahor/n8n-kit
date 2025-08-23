// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RabbitMQCredentials } from "../credentials/RabbitMQ.ts";
import type { Credentials } from "../../credentials";
import type { RabbitMQNodeParameters } from "../nodes/RabbitMQ";
import { Node, type NodeProps } from "../../nodes";

export interface RabbitMQProps extends NodeProps, RabbitMQNodeParameters {

    readonly rabbitmqCredentials: Credentials<RabbitMQCredentials>;

}

export class RabbitMQ<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.rabbitmq" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props: RabbitMQProps) {

        super(id, props);

    }

    override getParameters() : Omit<RabbitMQNodeParameters, "rabbitmqCredentials"> {

        const { rabbitmqCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.rabbitmqCredentials];

    }


}
