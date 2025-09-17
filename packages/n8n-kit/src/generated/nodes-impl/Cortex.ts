// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CortexApiCredentials } from "../credentials/CortexApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CortexNodeParameters } from "../nodes/Cortex";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CortexProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CortexNodeParameters;
    readonly cortexApiCredentials: Credentials<CortexApiCredentials>;
}

/**
 * Apply the Cortex analyzer/responder on the given entity
 */
export class Cortex<L extends string, C extends IContext = never, P extends CortexProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.cortex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.cortexApiCredentials];
    }

}
