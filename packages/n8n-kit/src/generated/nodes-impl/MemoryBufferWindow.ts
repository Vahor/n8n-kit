// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MemoryBufferWindowNodeParameters } from "../nodes/MemoryBufferWindow";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryBufferWindowProps extends NodeProps {

    readonly parameters: MemoryBufferWindowNodeParameters;

}

export class MemoryBufferWindow<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.memoryBufferWindow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: MemoryBufferWindowProps) {

        super(id, props);

    }


}
