// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SeaTableApiCredentials } from "../credentials/SeaTableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SeaTableV1NodeParameters } from "../nodes/SeaTableV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SeaTableV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SeaTableV1NodeParameters;
    readonly seaTableApiCredentials: Credentials<SeaTableApiCredentials>;
}

/**
 * Consume the SeaTable API
 */
export class SeaTableV1<L extends string, C extends IContext = never, P extends SeaTableV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.seaTable" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.seaTableApiCredentials];
    }

}
