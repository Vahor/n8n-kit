// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ReadPDFNodeParameters } from "../nodes/ReadPDF";
import { Node, type NodeProps } from "../../nodes";

export interface ReadPDFProps extends NodeProps, ReadPDFNodeParameters {


}

export class ReadPDF<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.readPDF" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ReadPDFProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

