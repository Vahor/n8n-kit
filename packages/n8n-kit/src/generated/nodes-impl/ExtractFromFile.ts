// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ExtractFromFileNodeParameters } from "../nodes/ExtractFromFile";
import { Node, type NodeProps } from "../../nodes";

export interface ExtractFromFileProps extends NodeProps, ExtractFromFileNodeParameters {


}

export class ExtractFromFile<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.extractFromFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ExtractFromFileProps) {

        super(id, props);

    }

    override getParameters() : ExtractFromFileNodeParameters {

        return this.props ?? {};

    }


}

