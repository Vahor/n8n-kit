// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { MessageAnAgentV1NodeParameters } from "../nodes/MessageAnAgentV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MessageAnAgentV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MessageAnAgentV1NodeParameters;
}

/**
 * Send a message to a n8n agent
 */
export class MessageAnAgentV1<L extends string, C extends IContext = never, P extends MessageAnAgentV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.messageAnAgent" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
