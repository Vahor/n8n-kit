// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PeekalinkApiCredentials } from "../credentials/PeekalinkApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PeekalinkNodeParameters } from "../nodes/Peekalink";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PeekalinkProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PeekalinkNodeParameters;
    readonly peekalinkApiCredentials: Credentials<PeekalinkApiCredentials>;
}

/**
 * Consume the Peekalink API
 */
export class Peekalink<L extends string, C extends IContext = never, P extends PeekalinkProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.peekalink" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.peekalinkApiCredentials];
    }

}
