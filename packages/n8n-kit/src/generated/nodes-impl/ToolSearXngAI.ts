// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SearXngApiCredentials } from "../credentials/SearXngApi.ts";
import type { Credentials } from "../../credentials";
import type { ToolSearXngAINodeParameters } from "../nodes/ToolSearXngAI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolSearXngAIProps extends NodeProps, ToolSearXngAINodeParameters {

    readonly searXngApiCredentials: Credentials<SearXngApiCredentials>;

}

export class ToolSearXngAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolSearXng" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ToolSearXngAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<ToolSearXngAINodeParameters, "searXngApiCredentials"> {

        const { searXngApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.searXngApiCredentials];

    }


}
