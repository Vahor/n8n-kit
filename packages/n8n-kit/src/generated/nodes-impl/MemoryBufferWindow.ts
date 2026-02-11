// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { MemoryBufferWindowNodeParameters } from "../nodes/MemoryBufferWindow";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MemoryBufferWindowProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MemoryBufferWindowNodeParameters;
}

/**
 * Stores in n8n memory, so no credentials required
 */
export class MemoryBufferWindow<L extends string, C extends IContext = never, P extends MemoryBufferWindowProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.memoryBufferWindow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiMemory(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_memory" });
        return this;
    }

}
