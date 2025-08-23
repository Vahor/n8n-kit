// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TextClassifierNodeParameters } from "../nodes/TextClassifier";
import { Node, type NodeProps } from "../../nodes";

export interface TextClassifierProps extends NodeProps {

    readonly parameters: TextClassifierNodeParameters;

}

export class TextClassifier<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.textClassifier" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: TextClassifierProps) {

        super(id, props);

    }


}
