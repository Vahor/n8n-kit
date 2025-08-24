// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SpreadsheetFileV1NodeParameters } from "../nodes/SpreadsheetFileV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface SpreadsheetFileV1Props extends NodeProps {
    readonly parameters: SpreadsheetFileV1NodeParameters;
}

/**
 * Reads and writes data from a spreadsheet file like CSV, XLS, ODS, etc
 */
export class SpreadsheetFileV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.spreadsheetFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SpreadsheetFileV1Props) {
        super(id, props);
    }

}
