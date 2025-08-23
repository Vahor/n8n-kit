// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WordpressApiCredentials } from "../credentials/WordpressApi.ts";
import type { Credentials } from "../../credentials";
import type { WordpressNodeParameters } from "../nodes/Wordpress";
import { Node, type NodeProps } from "../../nodes";

export interface WordpressProps extends NodeProps, WordpressNodeParameters {

    readonly wordpressApiCredentials: Credentials<WordpressApiCredentials>;

}

export class Wordpress<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.wordpress" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: WordpressProps) {

        super(id, props);

    }

    override getParameters() {

        const { wordpressApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.wordpressApiCredentials];

    }


}

