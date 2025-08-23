// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WolframAlphaApiCredentials } from "../credentials/WolframAlphaApi.ts";
import type { Credentials } from "../../credentials";
import type { ToolWolframAlphaAINodeParameters } from "../nodes/ToolWolframAlphaAI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolWolframAlphaAIProps extends NodeProps, ToolWolframAlphaAINodeParameters {

    readonly wolframAlphaApiCredentials: Credentials<WolframAlphaApiCredentials>;

}

export class ToolWolframAlphaAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolWolframAlpha" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ToolWolframAlphaAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<ToolWolframAlphaAINodeParameters, "wolframAlphaApiCredentials"> {

        const { wolframAlphaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.wolframAlphaApiCredentials];

    }


}

