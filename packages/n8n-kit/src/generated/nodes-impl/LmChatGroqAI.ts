// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GroqApiCredentials } from "../credentials/GroqApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatGroqAINodeParameters } from "../nodes/LmChatGroqAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatGroqAIProps extends NodeProps, LmChatGroqAINodeParameters {

    readonly groqApiCredentials: Credentials<GroqApiCredentials>;

}

export class LmChatGroqAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatGroq" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatGroqAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatGroqAINodeParameters, "groqApiCredentials"> {

        const { groqApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.groqApiCredentials];

    }


}

