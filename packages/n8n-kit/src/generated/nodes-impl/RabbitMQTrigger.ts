// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RabbitMQCredentials } from "../credentials/RabbitMQ.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RabbitMQTriggerNodeParameters } from "../nodes/RabbitMQTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface RabbitMQTriggerProps extends NodeProps {
    readonly parameters: RabbitMQTriggerNodeParameters;
    readonly rabbitmqCredentials: Credentials<RabbitMQCredentials>;
}

/**
 * Listens to RabbitMQ messages
 */
export class RabbitMQTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.rabbitmqTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: RabbitMQTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.rabbitmqCredentials];
    }

}
