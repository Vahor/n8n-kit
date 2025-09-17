// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BubbleApiCredentials } from "../credentials/BubbleApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BubbleNodeParameters } from "../nodes/Bubble";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface BubbleProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: BubbleNodeParameters;
    readonly bubbleApiCredentials: Credentials<BubbleApiCredentials>;
}

/**
 * Consume the Bubble Data API
 */
export class Bubble<L extends string, C extends IContext = never, P extends BubbleProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.bubble" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.bubbleApiCredentials];
    }

}
