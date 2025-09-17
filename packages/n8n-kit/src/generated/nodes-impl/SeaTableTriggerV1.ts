// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SeaTableApiCredentials } from "../credentials/SeaTableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SeaTableTriggerV1NodeParameters } from "../nodes/SeaTableTriggerV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SeaTableTriggerV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SeaTableTriggerV1NodeParameters;
    readonly seaTableApiCredentials: Credentials<SeaTableApiCredentials>;
}

/**
 * Starts the workflow when SeaTable events occur
 */
export class SeaTableTriggerV1<L extends string, C extends IContext = never, P extends SeaTableTriggerV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.seaTableTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.seaTableApiCredentials];
    }

}
