// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PhantombusterApiCredentials } from "../credentials/PhantombusterApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PhantombusterNodeParameters } from "../nodes/Phantombuster";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PhantombusterProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PhantombusterNodeParameters;
    readonly phantombusterApiCredentials: Credentials<PhantombusterApiCredentials>;
}

/**
 * Consume Phantombuster API
 */
export class Phantombuster<L extends string, C extends IContext = never, P extends PhantombusterProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.phantombuster" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.phantombusterApiCredentials];
    }

}
