// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AgentV2NodeParameters } from "../nodes/AgentV2";
import { Node, type NodeProps } from "../../nodes";

export interface AgentV2Props extends NodeProps {

    readonly parameters: AgentV2NodeParameters;

}

export class AgentV2<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.agent" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: AgentV2Props) {

        super(id, props);

    }


}
