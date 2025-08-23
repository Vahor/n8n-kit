// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolWikipediaAINodeParameters } from "../nodes/ToolWikipediaAI";
import { Node, type NodeProps } from "../../nodes";

export interface ToolWikipediaAIProps extends NodeProps, ToolWikipediaAINodeParameters {


}

export class ToolWikipediaAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.toolWikipedia" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ToolWikipediaAIProps) {

        super(id, props);

    }

    override getParameters() : ToolWikipediaAINodeParameters {

        return this.props ?? {};

    }


}
