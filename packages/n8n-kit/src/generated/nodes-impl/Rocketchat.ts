// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RocketchatApiCredentials } from "../credentials/RocketchatApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RocketchatNodeParameters } from "../nodes/Rocketchat";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RocketchatProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RocketchatNodeParameters;
    readonly rocketchatApiCredentials: Credentials<RocketchatApiCredentials>;
}

/**
 * Consume RocketChat API
 */
export class Rocketchat<L extends string, C extends IContext = never, P extends RocketchatProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.rocketchat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.rocketchatApiCredentials];
    }

}
