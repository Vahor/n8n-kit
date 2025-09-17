// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StackbyApiCredentials } from "../credentials/StackbyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { StackbyNodeParameters } from "../nodes/Stackby";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface StackbyProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: StackbyNodeParameters;
    readonly stackbyApiCredentials: Credentials<StackbyApiCredentials>;
}

/**
 * Read, write, and delete data in Stackby
 */
export class Stackby<L extends string, C extends IContext = never, P extends StackbyProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.stackby" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.stackbyApiCredentials];
    }

}
