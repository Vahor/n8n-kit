// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { AiTransformNodeParameters } from "../nodes/AiTransform";
import { Node, type NodeProps } from "../../nodes/node";

export interface AiTransformProps extends NodeProps {
    readonly parameters: AiTransformNodeParameters;
}

/**
 * Modify data based on instructions written in plain english
 */
export class AiTransform<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.aiTransform" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: AiTransformProps) {
        super(id, props);
    }

}
