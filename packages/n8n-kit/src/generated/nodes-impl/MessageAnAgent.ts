// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { MessageAnAgentNodeParameters } from "../nodes/MessageAnAgent";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MessageAnAgentProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MessageAnAgentNodeParameters;
}

/**
 * Send a message to a n8n agent
 */
export class MessageAnAgent<L extends string, C extends IContext = never, P extends MessageAnAgentProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.messageAnAgent" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
