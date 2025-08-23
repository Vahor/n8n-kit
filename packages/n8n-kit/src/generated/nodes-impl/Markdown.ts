// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MarkdownNodeParameters } from "../nodes/Markdown";
import { Node, type NodeProps } from "../../nodes";

export interface MarkdownProps extends NodeProps {

    readonly parameters: MarkdownNodeParameters;

}

export class Markdown<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.markdown" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: MarkdownProps) {

        super(id, props);

    }


}
