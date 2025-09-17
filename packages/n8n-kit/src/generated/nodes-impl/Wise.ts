// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WiseApiCredentials } from "../credentials/WiseApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WiseNodeParameters } from "../nodes/Wise";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WiseProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WiseNodeParameters;
    readonly wiseApiCredentials: Credentials<WiseApiCredentials>;
}

/**
 * Consume the Wise API
 */
export class Wise<L extends string, C extends IContext = never, P extends WiseProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.wise" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.wiseApiCredentials];
    }

}
