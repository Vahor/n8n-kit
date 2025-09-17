// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CopperApiCredentials } from "../credentials/CopperApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CopperNodeParameters } from "../nodes/Copper";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CopperProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CopperNodeParameters;
    readonly copperApiCredentials: Credentials<CopperApiCredentials>;
}

/**
 * Consume the Copper API
 */
export class Copper<L extends string, C extends IContext = never, P extends CopperProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.copper" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.copperApiCredentials];
    }

}
