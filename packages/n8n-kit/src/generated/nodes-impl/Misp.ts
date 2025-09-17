// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MispApiCredentials } from "../credentials/MispApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MispNodeParameters } from "../nodes/Misp";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MispProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MispNodeParameters;
    readonly mispApiCredentials: Credentials<MispApiCredentials>;
}

/**
 * Consume the MISP API
 */
export class Misp<L extends string, C extends IContext = never, P extends MispProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.misp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mispApiCredentials];
    }

}
