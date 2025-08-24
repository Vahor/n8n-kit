// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SetV2NodeParameters } from "../nodes/SetV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface SetV2Props extends NodeProps {
    readonly parameters: SetV2NodeParameters;
}

/**
 * Modify, add, or remove item fields
 */
export class SetV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.set" as const;
    protected typeVersion = 3.4 as const;

    constructor(id: L, override props?: SetV2Props) {
        super(id, props);
    }

}
