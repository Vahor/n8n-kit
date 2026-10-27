// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PerplexityApiCredentials } from "../credentials/PerplexityApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PerplexityV2NodeParameters } from "../nodes/PerplexityV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PerplexityV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PerplexityV2NodeParameters;
    readonly perplexityApiCredentials: Credentials<PerplexityApiCredentials>;
}

/**
 * AI-powered answer engine that provides accurate, trusted, and real-time answers to any question. Supports agent responses, web search, and embeddings.
 */
export class PerplexityV2<L extends string, C extends IContext = never, P extends PerplexityV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.perplexity" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.perplexityApiCredentials];
    }

}
