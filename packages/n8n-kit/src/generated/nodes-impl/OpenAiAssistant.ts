// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { OpenAiAssistantNodeParameters } from "../nodes/OpenAiAssistant";
import { Node, type NodeProps } from "../../nodes";

export interface OpenAiAssistantProps extends NodeProps, OpenAiAssistantNodeParameters {

    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;

}

export class OpenAiAssistant<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.openAiAssistant" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props: OpenAiAssistantProps) {

        super(id, props);

    }

    override getParameters() : Omit<OpenAiAssistantNodeParameters, "openAiApiCredentials"> {

        const { openAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.openAiApiCredentials];

    }


}
