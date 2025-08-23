// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RetrieverMultiQueryNodeParameters } from "../nodes/RetrieverMultiQuery";
import { Node, type NodeProps } from "../../nodes";

export interface RetrieverMultiQueryProps extends NodeProps, RetrieverMultiQueryNodeParameters {


}

export class RetrieverMultiQuery<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.retrieverMultiQuery" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: RetrieverMultiQueryProps) {

        super(id, props);

    }

    override getParameters() : RetrieverMultiQueryNodeParameters {

        return this.props ?? {};

    }


}
