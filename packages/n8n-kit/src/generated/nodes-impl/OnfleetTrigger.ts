// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OnfleetApiCredentials } from "../credentials/OnfleetApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OnfleetTriggerNodeParameters } from "../nodes/OnfleetTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OnfleetTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OnfleetTriggerNodeParameters;
    readonly onfleetApiCredentials: Credentials<OnfleetApiCredentials>;
}

/**
 * Starts the workflow when Onfleet events occur
 */
export class OnfleetTrigger<L extends string, C extends IContext = never, P extends OnfleetTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.onfleetTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.onfleetApiCredentials];
    }

}
