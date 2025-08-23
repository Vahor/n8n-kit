// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { DocumentDefaultDataLoaderNodeParameters } from "../nodes/DocumentDefaultDataLoader";
import { Node, type NodeProps } from "../../nodes";

export interface DocumentDefaultDataLoaderProps extends NodeProps {
    readonly parameters: DocumentDefaultDataLoaderNodeParameters;
}

/**
 * Load data from previous step in the workflow
 */
export class DocumentDefaultDataLoader<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.documentDefaultDataLoader" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: DocumentDefaultDataLoaderProps) {
        super(id, props);
    }

    public toAiDocument(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_document" });
        return this;
    }

}
