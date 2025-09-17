// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ClearbitApiCredentials } from "../credentials/ClearbitApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ClearbitNodeParameters } from "../nodes/Clearbit";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ClearbitProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ClearbitNodeParameters;
    readonly clearbitApiCredentials: Credentials<ClearbitApiCredentials>;
}

/**
 * Consume Clearbit API
 */
export class Clearbit<L extends string, C extends IContext = never, P extends ClearbitProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.clearbit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.clearbitApiCredentials];
    }

}
