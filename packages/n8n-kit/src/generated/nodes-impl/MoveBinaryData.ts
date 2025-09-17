// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { MoveBinaryDataNodeParameters } from "../nodes/MoveBinaryData";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MoveBinaryDataProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MoveBinaryDataNodeParameters;
}

/**
 * Move data between binary and JSON properties
 */
export class MoveBinaryData<L extends string, C extends IContext = never, P extends MoveBinaryDataProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.moveBinaryData" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
