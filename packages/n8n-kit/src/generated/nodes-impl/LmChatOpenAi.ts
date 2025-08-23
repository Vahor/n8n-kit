// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatOpenAiNodeParameters } from "../nodes/LmChatOpenAi";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatOpenAiProps extends NodeProps, LmChatOpenAiNodeParameters {

    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;

}

export class LmChatOpenAi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatOpenAi" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, public readonly props: LmChatOpenAiProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatOpenAiNodeParameters, "openAiApiCredentials"> {

        const { openAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.openAiApiCredentials];

    }


}
