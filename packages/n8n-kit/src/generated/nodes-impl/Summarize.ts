// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SummarizeNodeParameters } from "../nodes/Summarize";
import { Node, type NodeProps } from "../../nodes";

export interface SummarizeProps extends NodeProps {

    readonly parameters: SummarizeNodeParameters;

}

export class Summarize<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.summarize" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: SummarizeProps) {

        super(id, props);

    }


}
