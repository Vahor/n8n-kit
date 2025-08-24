// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CompareDatasetsNodeParameters } from "../nodes/CompareDatasets";
import { Node, type NodeProps } from "../../nodes/node";

export interface CompareDatasetsProps extends NodeProps {
    readonly parameters: CompareDatasetsNodeParameters;
}

/**
 * Compare two inputs for changes
 */
export class CompareDatasets<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.compareDatasets" as const;
    protected typeVersion = 2.3 as const;

    constructor(id: L, override props?: CompareDatasetsProps) {
        super(id, props);
    }

}
