// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PerplexityApiCredentials } from "../credentials/PerplexityApi.ts";
import type { Credentials } from "../../credentials";
import type { PerplexityNodeParameters } from "../nodes/Perplexity";
import { Node, type NodeProps } from "../../nodes";

export interface PerplexityProps extends NodeProps, PerplexityNodeParameters {

    readonly perplexityApiCredentials: Credentials<PerplexityApiCredentials>;

}

export class Perplexity<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.perplexity" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: PerplexityProps) {

        super(id, props);

    }

    override getParameters() : Omit<PerplexityNodeParameters, "perplexityApiCredentials"> {

        const { perplexityApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.perplexityApiCredentials];

    }


}
