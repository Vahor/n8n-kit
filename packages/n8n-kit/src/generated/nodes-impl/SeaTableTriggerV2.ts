// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SeaTableApiCredentials } from "../credentials/SeaTableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SeaTableTriggerV2NodeParameters } from "../nodes/SeaTableTriggerV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SeaTableTriggerV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SeaTableTriggerV2NodeParameters;
    readonly seaTableApiCredentials: Credentials<SeaTableApiCredentials>;
}

/**
 * Starts the workflow when SeaTable events occur
 */
export class SeaTableTriggerV2<L extends string, C extends IContext = never, P extends SeaTableTriggerV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.seaTableTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.seaTableApiCredentials];
    }

}
