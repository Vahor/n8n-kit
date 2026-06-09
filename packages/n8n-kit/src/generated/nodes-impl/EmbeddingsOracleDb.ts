// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OracleDBApiCredentials } from "../credentials/OracleDBApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsOracleDbNodeParameters } from "../nodes/EmbeddingsOracleDb";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmbeddingsOracleDbProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmbeddingsOracleDbNodeParameters;
    readonly oracleDbApiCredentials: Credentials<OracleDBApiCredentials>;
}

/**
 * Use ONNX Embeddings
 */
export class EmbeddingsOracleDb<L extends string, C extends IContext = never, P extends EmbeddingsOracleDbProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsOracleDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.oracleDbApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
