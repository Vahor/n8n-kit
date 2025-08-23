// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { DocumentBinaryInputLoaderNodeParameters } from "../nodes/DocumentBinaryInputLoader";
import { Node, type NodeProps } from "../../nodes";

export interface DocumentBinaryInputLoaderProps extends NodeProps {
    readonly parameters: DocumentBinaryInputLoaderNodeParameters;
}

/**
 * Use binary data from a previous step in the workflow
 */
export class DocumentBinaryInputLoader<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.documentBinaryInputLoader" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: DocumentBinaryInputLoaderProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public withTextSplitter(next: State): this {
        super.addNext(next.startState, { type: "ai_textSplitter", direction: "input" });
        return this;
    }

    public toAiDocument(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_document" });
        return this;
    }

}
