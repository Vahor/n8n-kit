// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ElasticsearchApiCredentials } from "../credentials/ElasticsearchApi.ts";
import type { Credentials } from "../../credentials";
import type { ElasticsearchNodeParameters } from "../nodes/Elasticsearch";
import { Node, type NodeProps } from "../../nodes";

export interface ElasticsearchProps extends NodeProps {

    readonly parameters: ElasticsearchNodeParameters;
    readonly elasticsearchApiCredentials: Credentials<ElasticsearchApiCredentials>;

}

export class Elasticsearch<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.elasticsearch" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ElasticsearchProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.elasticsearchApiCredentials];

    }


}
