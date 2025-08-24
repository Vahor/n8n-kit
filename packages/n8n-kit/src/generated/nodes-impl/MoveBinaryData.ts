// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MoveBinaryDataNodeParameters } from "../nodes/MoveBinaryData";
import { Node, type NodeProps } from "../../nodes/node";

export interface MoveBinaryDataProps extends NodeProps {
    readonly parameters: MoveBinaryDataNodeParameters;
}

/**
 * Move data between binary and JSON properties
 */
export class MoveBinaryData<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.moveBinaryData" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: MoveBinaryDataProps) {
        super(id, props);
    }

}
