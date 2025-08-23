// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { MemoryZepNodeParameters } from "../nodes/MemoryZep";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryZepProps extends NodeProps, MemoryZepNodeParameters {

    readonly zepApiCredentials: Credentials<ZepApiCredentials>;

}

export class MemoryZep<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryZep" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: MemoryZepProps) {

        super(id, props);

    }

    override getParameters() : Omit<MemoryZepNodeParameters, "zepApiCredentials"> {

        const { zepApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.zepApiCredentials];

    }


}
