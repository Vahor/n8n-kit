// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MemoryBufferWindowNodeParameters } from "../nodes/MemoryBufferWindow";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryBufferWindowProps extends NodeProps, MemoryBufferWindowNodeParameters {


}

export class MemoryBufferWindow<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryBufferWindow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: MemoryBufferWindowProps) {

        super(id, props);

    }

    override getParameters() : MemoryBufferWindowNodeParameters {

        return this.props ?? {};

    }


}
