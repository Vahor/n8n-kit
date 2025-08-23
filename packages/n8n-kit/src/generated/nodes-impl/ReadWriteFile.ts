// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ReadWriteFileNodeParameters } from "../nodes/ReadWriteFile";
import { Node, type NodeProps } from "../../nodes";

export interface ReadWriteFileProps extends NodeProps, ReadWriteFileNodeParameters {


}

export class ReadWriteFile<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.readWriteFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ReadWriteFileProps) {

        super(id, props);

    }

    override getParameters() : ReadWriteFileNodeParameters {

        return this.props ?? {};

    }


}

