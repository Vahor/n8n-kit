// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SpreadsheetFileV2NodeParameters } from "../nodes/SpreadsheetFileV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SpreadsheetFileV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SpreadsheetFileV2NodeParameters;
}

/**
 * Reads and writes data from a spreadsheet file like CSV, XLS, ODS, etc
 */
export class SpreadsheetFileV2<L extends string, C extends IContext = never, P extends SpreadsheetFileV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.spreadsheetFile" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
