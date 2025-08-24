// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { SwitchV1NodeParameters } from "../nodes/SwitchV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface SwitchV1Props extends NodeProps {
    readonly parameters: SwitchV1NodeParameters;
}

/**
 * Route items depending on defined expression or rules
 */
export class SwitchV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.switch" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SwitchV1Props) {
        super(id, props);
    }

}
