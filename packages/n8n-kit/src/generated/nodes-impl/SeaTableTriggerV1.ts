// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SeaTableApiCredentials } from "../credentials/SeaTableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SeaTableTriggerV1NodeParameters } from "../nodes/SeaTableTriggerV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface SeaTableTriggerV1Props extends NodeProps {
    readonly parameters: SeaTableTriggerV1NodeParameters;
    readonly seaTableApiCredentials: Credentials<SeaTableApiCredentials>;
}

/**
 * Starts the workflow when SeaTable events occur
 */
export class SeaTableTriggerV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.seaTableTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SeaTableTriggerV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.seaTableApiCredentials];
    }

}
