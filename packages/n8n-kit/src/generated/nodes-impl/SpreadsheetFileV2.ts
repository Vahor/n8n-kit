// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SpreadsheetFileV2NodeParameters } from "../nodes/SpreadsheetFileV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface SpreadsheetFileV2Props extends NodeProps {
    readonly parameters: SpreadsheetFileV2NodeParameters;
}

/**
 * Reads and writes data from a spreadsheet file like CSV, XLS, ODS, etc
 */
export class SpreadsheetFileV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.spreadsheetFile" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: SpreadsheetFileV2Props) {
        super(id, props);
    }

}
