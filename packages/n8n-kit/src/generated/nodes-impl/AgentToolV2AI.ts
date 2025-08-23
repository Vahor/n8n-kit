// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AgentToolV2AINodeParameters } from "../nodes/AgentToolV2AI";
import { Node, type NodeProps } from "../../nodes";

export interface AgentToolV2AIProps extends NodeProps, AgentToolV2AINodeParameters {


}

export class AgentToolV2AI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, public readonly props?: AgentToolV2AIProps) {

        super(id, props);

    }

    override getParameters() : AgentToolV2AINodeParameters {

        return this.props ?? {};

    }


}
