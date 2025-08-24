// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WordpressApiCredentials } from "../credentials/WordpressApi.ts";
import type { Credentials } from "../../credentials";
import type { WordpressNodeParameters } from "../nodes/Wordpress";
import { Node, type NodeProps } from "../../nodes/node";

export interface WordpressProps extends NodeProps {
    readonly parameters: WordpressNodeParameters;
    readonly wordpressApiCredentials: Credentials<WordpressApiCredentials>;
}

/**
 * Consume Wordpress API
 */
export class Wordpress<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.wordpress" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WordpressProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.wordpressApiCredentials];
    }

}
