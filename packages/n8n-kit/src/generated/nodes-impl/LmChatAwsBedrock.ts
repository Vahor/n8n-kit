// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { LmChatAwsBedrockNodeParameters } from "../nodes/LmChatAwsBedrock";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatAwsBedrockProps extends NodeProps {
    readonly parameters: LmChatAwsBedrockNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Language Model AWS Bedrock
 */
export class LmChatAwsBedrock<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatAwsBedrock" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: LmChatAwsBedrockProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
