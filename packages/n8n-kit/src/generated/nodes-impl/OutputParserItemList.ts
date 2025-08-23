// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OutputParserItemListNodeParameters } from "../nodes/OutputParserItemList";
import { Node, type NodeProps } from "../../nodes";

export interface OutputParserItemListProps extends NodeProps, OutputParserItemListNodeParameters {


}

export class OutputParserItemList<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.outputParserItemList" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: OutputParserItemListProps) {

        super(id, props);

    }

    override getParameters() : OutputParserItemListNodeParameters {

        return this.props ?? {};

    }


}
