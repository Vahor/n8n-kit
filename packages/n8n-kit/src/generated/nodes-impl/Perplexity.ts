// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PerplexityApiCredentials } from "../credentials/PerplexityApi.ts";
import type { Credentials } from "../../credentials";
import type { PerplexityNodeParameters } from "../nodes/Perplexity";
import { Node, type NodeProps } from "../../nodes";

export interface PerplexityProps extends NodeProps {

    readonly parameters: PerplexityNodeParameters;
    readonly perplexityApiCredentials: Credentials<PerplexityApiCredentials>;

}

export class Perplexity<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.perplexity" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PerplexityProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.perplexityApiCredentials];

    }


}
