// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SeaTableApiCredentials } from "../credentials/SeaTableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SeaTableTriggerV2NodeParameters } from "../nodes/SeaTableTriggerV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface SeaTableTriggerV2Props extends NodeProps {
    readonly parameters: SeaTableTriggerV2NodeParameters;
    readonly seaTableApiCredentials: Credentials<SeaTableApiCredentials>;
}

/**
 * Starts the workflow when SeaTable events occur
 */
export class SeaTableTriggerV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.seaTableTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: SeaTableTriggerV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.seaTableApiCredentials];
    }

}
