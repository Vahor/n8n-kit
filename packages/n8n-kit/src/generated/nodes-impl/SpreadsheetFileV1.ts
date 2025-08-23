// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpreadsheetFileV1NodeParameters } from "../nodes/SpreadsheetFileV1";
import { Node, type NodeProps } from "../../nodes";

export interface SpreadsheetFileV1Props extends NodeProps, SpreadsheetFileV1NodeParameters {


}

export class SpreadsheetFileV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SpreadsheetFileV1Props) {

        super(id, props);

    }

    override getParameters() : SpreadsheetFileV1NodeParameters {

        return this.props ?? {};

    }


}
