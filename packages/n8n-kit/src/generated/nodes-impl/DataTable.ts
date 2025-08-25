// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DataTableNodeParameters } from "../nodes/DataTable";
import { Node, type NodeProps } from "../../nodes/node";

export interface DataTableProps extends NodeProps {
    readonly parameters: DataTableNodeParameters;
}

/**
 * Save data across workflow executions in a table
 */
export class DataTable<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.dataTable" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: DataTableProps) {
        super(id, props);
    }

}
