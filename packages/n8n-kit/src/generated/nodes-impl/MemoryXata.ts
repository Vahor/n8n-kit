// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { XataApiCredentials } from "../credentials/XataApi.ts";
import type { Credentials } from "../../credentials";
import type { MemoryXataNodeParameters } from "../nodes/MemoryXata";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryXataProps extends NodeProps {

    readonly parameters: MemoryXataNodeParameters;
    readonly xataApiCredentials: Credentials<XataApiCredentials>;

}

export class MemoryXata<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.memoryXata" as const;
    protected typeVersion = 1.4 as const;

    constructor(id: L, override props: MemoryXataProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.xataApiCredentials];

    }


}
