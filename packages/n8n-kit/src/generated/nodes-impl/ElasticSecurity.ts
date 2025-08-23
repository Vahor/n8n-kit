// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ElasticSecurityApiCredentials } from "../credentials/ElasticSecurityApi.ts";
import type { Credentials } from "../../credentials";
import type { ElasticSecurityNodeParameters } from "../nodes/ElasticSecurity";
import { Node, type NodeProps } from "../../nodes";

export interface ElasticSecurityProps extends NodeProps, ElasticSecurityNodeParameters {

    readonly elasticSecurityApiCredentials: Credentials<ElasticSecurityApiCredentials>;

}

export class ElasticSecurity<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.elasticSecurity" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ElasticSecurityProps) {

        super(id, props);

    }

    override getParameters() : Omit<ElasticSecurityNodeParameters, "elasticSecurityApiCredentials"> {

        const { elasticSecurityApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.elasticSecurityApiCredentials];

    }


}

