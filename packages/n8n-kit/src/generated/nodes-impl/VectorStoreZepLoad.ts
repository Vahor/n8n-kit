// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { VectorStoreZepLoadNodeParameters } from "../nodes/VectorStoreZepLoad";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface VectorStoreZepLoadProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: VectorStoreZepLoadNodeParameters;
    readonly zepApiCredentials: Credentials<ZepApiCredentials>;
}

/**
 * Load data from Zep Vector Store index
 */
export class VectorStoreZepLoad<L extends string, C extends IContext = never, P extends VectorStoreZepLoadProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStoreZepLoad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props.zepApiCredentials];
    }

    public withEmbedding(next: State): this {
        super.addNext(next.startState, { type: "ai_embedding", direction: "input" });
        return this;
    }

    public toAiVectorStore(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_vectorStore" });
        return this;
    }

}
