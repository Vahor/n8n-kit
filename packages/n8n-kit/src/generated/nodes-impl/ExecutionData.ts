// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ExecutionDataNodeParameters } from "../nodes/ExecutionData";
import { Node, type NodeProps } from "../../nodes";

export interface ExecutionDataProps extends NodeProps {

    readonly parameters: ExecutionDataNodeParameters;

}

/**
 * Add execution data for search
 */
export class ExecutionData<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.executionData" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: ExecutionDataProps) {

        super(id, props);

    }


}
