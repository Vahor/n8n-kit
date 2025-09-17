// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ElasticsearchApiCredentials } from "../credentials/ElasticsearchApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ElasticsearchNodeParameters } from "../nodes/Elasticsearch";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ElasticsearchProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ElasticsearchNodeParameters;
    readonly elasticsearchApiCredentials: Credentials<ElasticsearchApiCredentials>;
}

/**
 * Consume the Elasticsearch API
 */
export class Elasticsearch<L extends string, C extends IContext = never, P extends ElasticsearchProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.elasticsearch" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.elasticsearchApiCredentials];
    }

}
