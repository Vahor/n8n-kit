// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { LmOpenAiNodeParameters } from "../nodes/LmOpenAi";
import { Node, type NodeProps } from "../../nodes";

export interface LmOpenAiProps extends NodeProps, LmOpenAiNodeParameters {

    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;

}

export class LmOpenAi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmOpenAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmOpenAiProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmOpenAiNodeParameters, "openAiApiCredentials"> {

        const { openAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.openAiApiCredentials];

    }


}
