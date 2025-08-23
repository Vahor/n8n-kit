// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WolframAlphaApiCredentials } from "../credentials/WolframAlphaApi.ts";
import type { Credentials } from "../../credentials";
import type { ToolWolframAlphaNodeParameters } from "../nodes/ToolWolframAlpha";
import { Node, type NodeProps } from "../../nodes";

export interface ToolWolframAlphaProps extends NodeProps, ToolWolframAlphaNodeParameters {

    readonly wolframAlphaApiCredentials: Credentials<WolframAlphaApiCredentials>;

}

export class ToolWolframAlpha<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolWolframAlpha" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ToolWolframAlphaProps) {

        super(id, props);

    }

    override getParameters() : Omit<ToolWolframAlphaNodeParameters, "wolframAlphaApiCredentials"> {

        const { wolframAlphaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.wolframAlphaApiCredentials];

    }


}
