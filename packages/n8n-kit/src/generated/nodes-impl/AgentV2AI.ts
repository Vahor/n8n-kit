// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AgentV2AINodeParameters } from "../nodes/AgentV2AI";
import { Node, type NodeProps } from "../../nodes";

export interface AgentV2AIProps extends NodeProps, AgentV2AINodeParameters {


}

export class AgentV2AI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, public readonly props?: AgentV2AIProps) {

        super(id, props);

    }

    override getParameters() : AgentV2AINodeParameters {

        return this.props ?? {};

    }


}
