// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RabbitMQCredentials } from "../credentials/RabbitMQ.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RabbitMQNodeParameters } from "../nodes/RabbitMQ";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RabbitMQProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RabbitMQNodeParameters;
    readonly rabbitmqCredentials: Credentials<RabbitMQCredentials>;
}

/**
 * Sends messages to a RabbitMQ topic
 */
export class RabbitMQ<L extends string, C extends IContext = never, P extends RabbitMQProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.rabbitmq" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.rabbitmqCredentials];
    }

}
