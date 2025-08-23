// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { OpenAiAINodeParameters } from "../nodes/OpenAiAI";
import { Node, type NodeProps } from "../../nodes";

export interface OpenAiAIProps extends NodeProps, OpenAiAINodeParameters {

    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;

}

export class OpenAiAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.openAi" as const;
    protected typeVersion = 1.8 as const;

    constructor(id: L, public readonly props: OpenAiAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<OpenAiAINodeParameters, "openAiApiCredentials"> {

        const { openAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.openAiApiCredentials];

    }


}

