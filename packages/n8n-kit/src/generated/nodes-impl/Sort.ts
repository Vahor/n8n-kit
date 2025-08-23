// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SortNodeParameters } from "../nodes/Sort";
import { Node, type NodeProps } from "../../nodes";

export interface SortProps extends NodeProps {

    readonly parameters: SortNodeParameters;

}

/**
 * Change items order
 */
export class Sort<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.sort" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SortProps) {

        super(id, props);

    }


}
