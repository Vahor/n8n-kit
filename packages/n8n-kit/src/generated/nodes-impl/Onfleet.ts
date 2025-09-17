// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OnfleetApiCredentials } from "../credentials/OnfleetApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OnfleetNodeParameters } from "../nodes/Onfleet";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OnfleetProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OnfleetNodeParameters;
    readonly onfleetApiCredentials: Credentials<OnfleetApiCredentials>;
}

/**
 * Consume Onfleet API
 */
export class Onfleet<L extends string, C extends IContext = never, P extends OnfleetProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.onfleet" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.onfleetApiCredentials];
    }

}
