// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DisqusApiCredentials } from "../credentials/DisqusApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DisqusNodeParameters } from "../nodes/Disqus";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DisqusProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DisqusNodeParameters;
    readonly disqusApiCredentials: Credentials<DisqusApiCredentials>;
}

/**
 * Access data on Disqus
 */
export class Disqus<L extends string, C extends IContext = never, P extends DisqusProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.disqus" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.disqusApiCredentials];
    }

}
