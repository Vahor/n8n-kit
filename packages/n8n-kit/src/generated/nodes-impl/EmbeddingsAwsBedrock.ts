// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsAwsBedrockNodeParameters } from "../nodes/EmbeddingsAwsBedrock";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsAwsBedrockProps extends NodeProps {

    readonly parameters: EmbeddingsAwsBedrockNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;

}

/**
 * Use Embeddings AWS Bedrock
 */
export class EmbeddingsAwsBedrock<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsAwsBedrockProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.awsCredentials];

    }


}
