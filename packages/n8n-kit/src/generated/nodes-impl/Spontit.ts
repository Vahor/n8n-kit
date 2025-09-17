// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpontitApiCredentials } from "../credentials/SpontitApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SpontitNodeParameters } from "../nodes/Spontit";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SpontitProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SpontitNodeParameters;
    readonly spontitApiCredentials: Credentials<SpontitApiCredentials>;
}

/**
 * Consume Spontit API
 */
export class Spontit<L extends string, C extends IContext = never, P extends SpontitProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.spontit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.spontitApiCredentials];
    }

}
