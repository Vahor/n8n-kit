// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DisqusApiCredentials } from "../credentials/DisqusApi.ts";
import type { Credentials } from "../../credentials";
import type { DisqusNodeParameters } from "../nodes/Disqus";
import { Node, type NodeProps } from "../../nodes/node";

export interface DisqusProps extends NodeProps {
    readonly parameters: DisqusNodeParameters;
    readonly disqusApiCredentials: Credentials<DisqusApiCredentials>;
}

/**
 * Access data on Disqus
 */
export class Disqus<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.disqus" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: DisqusProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.disqusApiCredentials];
    }

}
