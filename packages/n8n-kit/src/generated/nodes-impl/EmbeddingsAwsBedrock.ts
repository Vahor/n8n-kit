// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsAwsBedrockNodeParameters } from "../nodes/EmbeddingsAwsBedrock";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmbeddingsAwsBedrockProps extends NodeProps {
    readonly parameters: EmbeddingsAwsBedrockNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Use Embeddings AWS Bedrock
 */
export class EmbeddingsAwsBedrock<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsAwsBedrockProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
