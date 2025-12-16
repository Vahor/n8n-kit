// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DataTableNodeParameters } from "../nodes/DataTable";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DataTableProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DataTableNodeParameters;
}

/**
 * Permanently save data across workflow executions in a table
 */
export class DataTable<L extends string, C extends IContext = never, P extends DataTableProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.dataTable" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
