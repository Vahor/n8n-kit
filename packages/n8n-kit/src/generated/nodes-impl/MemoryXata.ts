// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { XataApiCredentials } from "../credentials/XataApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { MemoryXataNodeParameters } from "../nodes/MemoryXata";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MemoryXataProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MemoryXataNodeParameters;
    readonly xataApiCredentials: Credentials<XataApiCredentials>;
}

/**
 * Use Xata Memory
 */
export class MemoryXata<L extends string, C extends IContext = never, P extends MemoryXataProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.memoryXata" as const;
    protected typeVersion = 1.4 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.xataApiCredentials];
    }

    public toAiMemory(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_memory" });
        return this;
    }

}
