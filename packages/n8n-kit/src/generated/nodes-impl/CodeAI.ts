// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CodeAINodeParameters } from "../nodes/CodeAI";
import { Node, type NodeProps } from "../../nodes";

export interface CodeAIProps extends NodeProps, CodeAINodeParameters {


}

export class CodeAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.code" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: CodeAIProps) {

        super(id, props);

    }

    override getParameters() : CodeAINodeParameters {

        return this.props ?? {};

    }


}

