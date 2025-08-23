// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DocumentJsonInputLoaderAINodeParameters } from "../nodes/DocumentJsonInputLoaderAI";
import { Node, type NodeProps } from "../../nodes";

export interface DocumentJsonInputLoaderAIProps extends NodeProps, DocumentJsonInputLoaderAINodeParameters {


}

export class DocumentJsonInputLoaderAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.documentJsonInputLoader" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: DocumentJsonInputLoaderAIProps) {

        super(id, props);

    }

    override getParameters() : DocumentJsonInputLoaderAINodeParameters {

        return this.props ?? {};

    }


}
