// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { SwitchV2NodeParameters } from "../nodes/SwitchV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface SwitchV2Props extends NodeProps {
    readonly parameters: SwitchV2NodeParameters;
}

/**
 * Route items depending on defined expression or rules
 */
export class SwitchV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.switch" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: SwitchV2Props) {
        super(id, props);
    }

    public toCustom(next: IChainable): this {
        super.addNext(next.startState, { type: "custom" });
        return this;
    }

}
