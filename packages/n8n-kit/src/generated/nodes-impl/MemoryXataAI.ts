// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { XataApiCredentials } from "../credentials/XataApi.ts";
import type { Credentials } from "../../credentials";
import type { MemoryXataAINodeParameters } from "../nodes/MemoryXataAI";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryXataAIProps extends NodeProps, MemoryXataAINodeParameters {

    readonly xataApiCredentials: Credentials<XataApiCredentials>;

}

export class MemoryXataAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryXata" as const;
    protected typeVersion = 1.4 as const;

    constructor(id: L, public readonly props: MemoryXataAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<MemoryXataAINodeParameters, "xataApiCredentials"> {

        const { xataApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.xataApiCredentials];

    }


}
