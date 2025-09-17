// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CockpitApiCredentials } from "../credentials/CockpitApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CockpitNodeParameters } from "../nodes/Cockpit";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CockpitProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CockpitNodeParameters;
    readonly cockpitApiCredentials: Credentials<CockpitApiCredentials>;
}

/**
 * Consume Cockpit API
 */
export class Cockpit<L extends string, C extends IContext = never, P extends CockpitProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.cockpit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.cockpitApiCredentials];
    }

}
