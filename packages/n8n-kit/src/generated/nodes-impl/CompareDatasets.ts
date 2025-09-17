// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CompareDatasetsNodeParameters } from "../nodes/CompareDatasets";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CompareDatasetsProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CompareDatasetsNodeParameters;
}

/**
 * Compare two inputs for changes
 */
export class CompareDatasets<L extends string, C extends IContext = never, P extends CompareDatasetsProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.compareDatasets" as const;
    protected typeVersion = 2.3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
