// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WordpressApiCredentials } from "../credentials/WordpressApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WordpressNodeParameters } from "../nodes/Wordpress";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WordpressProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WordpressNodeParameters;
    readonly wordpressApiCredentials: Credentials<WordpressApiCredentials>;
}

/**
 * Consume Wordpress API
 */
export class Wordpress<L extends string, C extends IContext = never, P extends WordpressProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.wordpress" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.wordpressApiCredentials];
    }

}
