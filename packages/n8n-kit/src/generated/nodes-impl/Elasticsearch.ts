// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ElasticsearchApiCredentials } from "../credentials/ElasticsearchApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ElasticsearchNodeParameters } from "../nodes/Elasticsearch";
import { Node, type NodeProps } from "../../nodes/node";

export interface ElasticsearchProps extends NodeProps {
    readonly parameters: ElasticsearchNodeParameters;
    readonly elasticsearchApiCredentials: Credentials<ElasticsearchApiCredentials>;
}

/**
 * Consume the Elasticsearch API
 */
export class Elasticsearch<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.elasticsearch" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ElasticsearchProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.elasticsearchApiCredentials];
    }

}
