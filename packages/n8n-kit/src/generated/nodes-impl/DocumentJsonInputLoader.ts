// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { DocumentJsonInputLoaderNodeParameters } from "../nodes/DocumentJsonInputLoader";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DocumentJsonInputLoaderProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DocumentJsonInputLoaderNodeParameters;
}

/**
 * Use JSON data from a previous step in the workflow
 */
export class DocumentJsonInputLoader<L extends string, C extends IContext = never, P extends DocumentJsonInputLoaderProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.documentJsonInputLoader" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
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
