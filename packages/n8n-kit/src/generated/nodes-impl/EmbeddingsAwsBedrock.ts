// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsAwsBedrockNodeParameters } from "../nodes/EmbeddingsAwsBedrock";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsAwsBedrockProps extends NodeProps, EmbeddingsAwsBedrockNodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class EmbeddingsAwsBedrock<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsAwsBedrock" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsAwsBedrockProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsAwsBedrockNodeParameters, "awsCredentials"> {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}
