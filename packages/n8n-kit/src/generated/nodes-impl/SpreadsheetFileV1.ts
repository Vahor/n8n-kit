// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SpreadsheetFileV1NodeParameters } from "../nodes/SpreadsheetFileV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SpreadsheetFileV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SpreadsheetFileV1NodeParameters;
}

/**
 * Reads and writes data from a spreadsheet file like CSV, XLS, ODS, etc
 */
export class SpreadsheetFileV1<L extends string, C extends IContext = never, P extends SpreadsheetFileV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.spreadsheetFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
