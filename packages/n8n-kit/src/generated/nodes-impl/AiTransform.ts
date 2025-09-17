// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { AiTransformNodeParameters } from "../nodes/AiTransform";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AiTransformProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AiTransformNodeParameters;
}

/**
 * Modify data based on instructions written in plain english
 */
export class AiTransform<L extends string, C extends IContext = never, P extends AiTransformProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.aiTransform" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
