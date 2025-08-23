// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DocumentJsonInputLoaderNodeParameters } from "../nodes/DocumentJsonInputLoader";
import { Node, type NodeProps } from "../../nodes";

export interface DocumentJsonInputLoaderProps extends NodeProps {

    readonly parameters: DocumentJsonInputLoaderNodeParameters;

}

export class DocumentJsonInputLoader<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.documentJsonInputLoader" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: DocumentJsonInputLoaderProps) {

        super(id, props);

    }


}
