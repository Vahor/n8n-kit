// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CodeAINodeParameters } from "../nodes/CodeAI";
import { Node, type NodeProps } from "../../nodes";

export interface CodeAIProps extends NodeProps {
    readonly parameters: CodeAINodeParameters;
}

/**
 * LangChain Code Node
 */
export class CodeAI<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.code" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: CodeAIProps) {
        super(id, props);
    }

}
