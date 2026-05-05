// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CurrentsApiCredentials } from "../credentials/CurrentsApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CurrentsTriggerNodeParameters } from "../nodes/CurrentsTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CurrentsTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CurrentsTriggerNodeParameters;
    readonly currentsApiCredentials: Credentials<CurrentsApiCredentials>;
}

/**
 * Starts the workflow when Currents events occur
 */
export class CurrentsTrigger<L extends string, C extends IContext = never, P extends CurrentsTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.currentsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.currentsApiCredentials];
    }

}
