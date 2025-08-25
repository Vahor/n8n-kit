// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SeaTableApiCredentials } from "../credentials/SeaTableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SeaTableV1NodeParameters } from "../nodes/SeaTableV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface SeaTableV1Props extends NodeProps {
    readonly parameters: SeaTableV1NodeParameters;
    readonly seaTableApiCredentials: Credentials<SeaTableApiCredentials>;
}

/**
 * Consume the SeaTable API
 */
export class SeaTableV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.seaTable" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SeaTableV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.seaTableApiCredentials];
    }

}
