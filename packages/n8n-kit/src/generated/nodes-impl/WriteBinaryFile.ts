// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WriteBinaryFileNodeParameters } from "../nodes/WriteBinaryFile";
import { Node, type NodeProps } from "../../nodes";

export interface WriteBinaryFileProps extends NodeProps, WriteBinaryFileNodeParameters {


}

export class WriteBinaryFile<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.writeBinaryFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: WriteBinaryFileProps) {

        super(id, props);

    }

    override getParameters() : WriteBinaryFileNodeParameters {

        return this.props ?? {};

    }


}
