// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChatAINodeParameters } from "../nodes/ChatAI";
import { Node, type NodeProps } from "../../nodes";

export interface ChatAIProps extends NodeProps {

    readonly parameters: ChatAINodeParameters;

}

export class ChatAI<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.chat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ChatAIProps) {

        super(id, props);

    }


}
