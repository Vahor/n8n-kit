// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextClassifierAINodeParameters } from "../nodes/TextClassifierAI";
import { Node, type NodeProps } from "../../nodes";

export interface TextClassifierAIProps extends NodeProps, TextClassifierAINodeParameters {


}

export class TextClassifierAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.textClassifier" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: TextClassifierAIProps) {

        super(id, props);

    }

    override getParameters() : TextClassifierAINodeParameters {

        return this.props ?? {};

    }


}
