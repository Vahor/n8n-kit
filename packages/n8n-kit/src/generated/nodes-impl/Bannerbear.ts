// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BannerbearApiCredentials } from "../credentials/BannerbearApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BannerbearNodeParameters } from "../nodes/Bannerbear";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface BannerbearProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: BannerbearNodeParameters;
    readonly bannerbearApiCredentials: Credentials<BannerbearApiCredentials>;
}

/**
 * Consume Bannerbear API
 */
export class Bannerbear<L extends string, C extends IContext = never, P extends BannerbearProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.bannerbear" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.bannerbearApiCredentials];
    }

}
