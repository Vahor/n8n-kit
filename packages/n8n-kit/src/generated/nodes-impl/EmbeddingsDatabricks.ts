// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DatabricksOAuth2ApiCredentials } from "../credentials/DatabricksOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsDatabricksNodeParameters } from "../nodes/EmbeddingsDatabricks";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmbeddingsDatabricksProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmbeddingsDatabricksNodeParameters;
    readonly databricksOAuth2ApiCredentials: Credentials<DatabricksOAuth2ApiCredentials>;
}

/**
 * Use Databricks Embeddings
 */
export class EmbeddingsDatabricks<L extends string, C extends IContext = never, P extends EmbeddingsDatabricksProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsDatabricks" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.databricksOAuth2ApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
