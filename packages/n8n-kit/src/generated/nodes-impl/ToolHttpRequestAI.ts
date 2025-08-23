// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolHttpRequestAINodeParameters } from "../nodes/ToolHttpRequestAI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolHttpRequestAIProps extends NodeProps, ToolHttpRequestAINodeParameters {


}

export class ToolHttpRequestAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolHttpRequest" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: ToolHttpRequestAIProps) {

        super(id, props);

    }

    override getParameters() : ToolHttpRequestAINodeParameters {

        return this.props ?? {};

    }


}

