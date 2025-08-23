// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AgentToolV2NodeParameters } from "../nodes/AgentToolV2";
import { Node, type NodeProps } from "../../nodes";

export interface AgentToolV2Props extends NodeProps, AgentToolV2NodeParameters {


}

export class AgentToolV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.agentTool" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, public readonly props?: AgentToolV2Props) {

        super(id, props);

    }

    override getParameters() : AgentToolV2NodeParameters {

        return this.props ?? {};

    }


}
