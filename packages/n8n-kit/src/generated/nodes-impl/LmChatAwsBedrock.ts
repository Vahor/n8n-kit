// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { LmChatAwsBedrockNodeParameters } from "../nodes/LmChatAwsBedrock";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatAwsBedrockProps extends NodeProps, LmChatAwsBedrockNodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class LmChatAwsBedrock<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatAwsBedrock" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props: LmChatAwsBedrockProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatAwsBedrockNodeParameters, "awsCredentials"> {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}
