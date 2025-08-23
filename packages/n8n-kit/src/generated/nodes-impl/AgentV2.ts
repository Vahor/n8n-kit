// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AgentV2NodeParameters } from "../nodes/AgentV2";
import { Node, type NodeProps } from "../../nodes";

export interface AgentV2Props extends NodeProps, AgentV2NodeParameters {


}

export class AgentV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.agent" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, public readonly props?: AgentV2Props) {

        super(id, props);

    }

    override getParameters() : AgentV2NodeParameters {

        return this.props ?? {};

    }


}
