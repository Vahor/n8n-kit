// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { MessageAnAgentV2NodeParameters } from "../nodes/MessageAnAgentV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MessageAnAgentV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MessageAnAgentV2NodeParameters;
}

/**
 * Send a message to a n8n agent
 */
export class MessageAnAgentV2<L extends string, C extends IContext = never, P extends MessageAnAgentV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.messageAnAgent" as const;
    protected typeVersion = 3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
