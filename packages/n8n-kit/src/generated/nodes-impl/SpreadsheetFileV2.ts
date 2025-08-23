// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpreadsheetFileV2NodeParameters } from "../nodes/SpreadsheetFileV2";
import { Node, type NodeProps } from "../../nodes";

export interface SpreadsheetFileV2Props extends NodeProps {
    readonly parameters: SpreadsheetFileV2NodeParameters;
}

/**
 * Reads and writes data from a spreadsheet file like CSV, XLS, ODS, etc
 */
export class SpreadsheetFileV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.spreadsheetFile" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: SpreadsheetFileV2Props) {
        super(id, props);
    }

}
