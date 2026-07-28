// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NvidiaApiCredentials } from "../credentials/NvidiaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsNvidiaNodeParameters } from "../nodes/EmbeddingsNvidia";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmbeddingsNvidiaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmbeddingsNvidiaNodeParameters;
    readonly nvidiaApiCredentials: Credentials<NvidiaApiCredentials>;
}

/**
 * Use NVIDIA NeMo Retriever embedding models from build.nvidia.com or a self-hosted NIM
 */
export class EmbeddingsNvidia<L extends string, C extends IContext = never, P extends EmbeddingsNvidiaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsNvidia" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.nvidiaApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
