// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ElasticSecurityApiCredentials } from "../credentials/ElasticSecurityApi.ts";
import type { Credentials } from "../../credentials";
import type { ElasticSecurityNodeParameters } from "../nodes/ElasticSecurity";
import { Node, type NodeProps } from "../../nodes";

export interface ElasticSecurityProps extends NodeProps {

    readonly parameters: ElasticSecurityNodeParameters;
    readonly elasticSecurityApiCredentials: Credentials<ElasticSecurityApiCredentials>;

}

export class ElasticSecurity<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.elasticSecurity" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ElasticSecurityProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.elasticSecurityApiCredentials];

    }


}
