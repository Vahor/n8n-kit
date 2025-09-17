// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { YourlsApiCredentials } from "../credentials/YourlsApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { YourlsNodeParameters } from "../nodes/Yourls";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface YourlsProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: YourlsNodeParameters;
    readonly yourlsApiCredentials: Credentials<YourlsApiCredentials>;
}

/**
 * Consume Yourls API
 */
export class Yourls<L extends string, C extends IContext = never, P extends YourlsProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.yourls" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.yourlsApiCredentials];
    }

}
