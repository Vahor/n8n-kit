// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { MemoryZepAINodeParameters } from "../nodes/MemoryZepAI";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryZepAIProps extends NodeProps, MemoryZepAINodeParameters {

    readonly zepApiCredentials: Credentials<ZepApiCredentials>;

}

export class MemoryZepAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryZep" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: MemoryZepAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<MemoryZepAINodeParameters, "zepApiCredentials"> {

        const { zepApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.zepApiCredentials];

    }


}

