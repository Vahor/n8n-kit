// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { SwitchV3NodeParameters } from "../nodes/SwitchV3";
import { Node, type NodeProps } from "../../nodes/node";

export interface SwitchV3Props extends NodeProps {
    readonly parameters: SwitchV3NodeParameters;
}

/**
 * Route items depending on defined expression or rules
 */
export class SwitchV3<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.switch" as const;
    protected typeVersion = 3.2 as const;

    constructor(id: L, override props?: SwitchV3Props) {
        super(id, props);
    }

    public toCustom(next: IChainable): this {
        super.addNext(next.startState, { type: "custom" });
        return this;
    }

}
