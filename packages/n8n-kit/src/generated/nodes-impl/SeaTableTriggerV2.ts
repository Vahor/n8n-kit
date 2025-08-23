// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SeaTableApiCredentials } from "../credentials/SeaTableApi.ts";
import type { Credentials } from "../../credentials";
import type { SeaTableTriggerV2NodeParameters } from "../nodes/SeaTableTriggerV2";
import { Node, type NodeProps } from "../../nodes";

export interface SeaTableTriggerV2Props extends NodeProps {
    readonly parameters: SeaTableTriggerV2NodeParameters;
    readonly seaTableApiCredentials: Credentials<SeaTableApiCredentials>;
}

/**
 * Starts the workflow when SeaTable events occur
 */
export class SeaTableTriggerV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.seaTableTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: SeaTableTriggerV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.seaTableApiCredentials];
    }

}
