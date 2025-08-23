// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CompareDatasetsNodeParameters } from "../nodes/CompareDatasets";
import { Node, type NodeProps } from "../../nodes";

export interface CompareDatasetsProps extends NodeProps, CompareDatasetsNodeParameters {


}

export class CompareDatasets<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.compareDatasets" as const;
    protected typeVersion = 2.3 as const;

    constructor(id: L, public readonly props: CompareDatasetsProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

