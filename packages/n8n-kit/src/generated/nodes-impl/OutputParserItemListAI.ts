// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OutputParserItemListAINodeParameters } from "../nodes/OutputParserItemListAI";
import { Node, type NodeProps } from "../../nodes";

export interface OutputParserItemListAIProps extends NodeProps, OutputParserItemListAINodeParameters {


}

export class OutputParserItemListAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.outputParserItemList" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: OutputParserItemListAIProps) {

        super(id, props);

    }

    override getParameters() : OutputParserItemListAINodeParameters {

        return this.props ?? {};

    }


}
