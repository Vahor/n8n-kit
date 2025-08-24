// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { MemoryZepNodeParameters } from "../nodes/MemoryZep";
import { Node, type NodeProps } from "../../nodes/node";

export interface MemoryZepProps extends NodeProps {
    readonly parameters: MemoryZepNodeParameters;
    readonly zepApiCredentials: Credentials<ZepApiCredentials>;
}

/**
 * Use Zep Memory
 */
export class MemoryZep<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.memoryZep" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: MemoryZepProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.zepApiCredentials];
    }

    public toAiMemory(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_memory" });
        return this;
    }

}
