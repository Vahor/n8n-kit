// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpreadsheetFileV2NodeParameters } from "../nodes/SpreadsheetFileV2";
import { Node, type NodeProps } from "../../nodes";

export interface SpreadsheetFileV2Props extends NodeProps, SpreadsheetFileV2NodeParameters {


}

export class SpreadsheetFileV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: SpreadsheetFileV2Props) {

        super(id, props);

    }

    override getParameters() : SpreadsheetFileV2NodeParameters {

        return this.props ?? {};

    }


}

