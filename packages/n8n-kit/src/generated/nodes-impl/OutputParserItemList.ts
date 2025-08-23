// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OutputParserItemListNodeParameters } from "../nodes/OutputParserItemList";
import { Node, type NodeProps } from "../../nodes";

export interface OutputParserItemListProps extends NodeProps {

    readonly parameters: OutputParserItemListNodeParameters;

}

/**
 * Return the results as separate items
 */
export class OutputParserItemList<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.outputParserItemList" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: OutputParserItemListProps) {

        super(id, props);

    }


}
