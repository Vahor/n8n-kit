// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RabbitMQCredentials } from "../credentials/RabbitMQ.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RabbitMQTriggerNodeParameters } from "../nodes/RabbitMQTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RabbitMQTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RabbitMQTriggerNodeParameters;
    readonly rabbitmqCredentials: Credentials<RabbitMQCredentials>;
}

/**
 * Listens to RabbitMQ messages
 */
export class RabbitMQTrigger<L extends string, C extends IContext = never, P extends RabbitMQTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.rabbitmqTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.rabbitmqCredentials];
    }

}
