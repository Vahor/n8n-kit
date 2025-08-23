// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpreadsheetFileV1NodeParameters } from "../nodes/SpreadsheetFileV1";
import { Node, type NodeProps } from "../../nodes";

export interface SpreadsheetFileV1Props extends NodeProps {

    readonly parameters: SpreadsheetFileV1NodeParameters;

}

/**
 * Reads and writes data from a spreadsheet file like CSV, XLS, ODS, etc
 */
export class SpreadsheetFileV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.spreadsheetFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SpreadsheetFileV1Props) {

        super(id, props);

    }


}
