// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RabbitMQCredentials } from "../credentials/RabbitMQ.ts";
import type { Credentials } from "../../credentials";
import type { RabbitMQNodeParameters } from "../nodes/RabbitMQ";
import { Node, type NodeProps } from "../../nodes/node";

export interface RabbitMQProps extends NodeProps {
    readonly parameters: RabbitMQNodeParameters;
    readonly rabbitmqCredentials: Credentials<RabbitMQCredentials>;
}

/**
 * Sends messages to a RabbitMQ topic
 */
export class RabbitMQ<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.rabbitmq" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: RabbitMQProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.rabbitmqCredentials];
    }

}
