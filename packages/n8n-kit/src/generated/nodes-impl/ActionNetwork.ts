// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ActionNetworkApiCredentials } from "../credentials/ActionNetworkApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ActionNetworkNodeParameters } from "../nodes/ActionNetwork";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ActionNetworkProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ActionNetworkNodeParameters;
    readonly actionNetworkApiCredentials: Credentials<ActionNetworkApiCredentials>;
}

/**
 * Consume the Action Network API
 */
export class ActionNetwork<L extends string, C extends IContext = never, P extends ActionNetworkProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.actionNetwork" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.actionNetworkApiCredentials];
    }

}
