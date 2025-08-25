// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ElasticSecurityApiCredentials } from "../credentials/ElasticSecurityApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ElasticSecurityNodeParameters } from "../nodes/ElasticSecurity";
import { Node, type NodeProps } from "../../nodes/node";

export interface ElasticSecurityProps extends NodeProps {
    readonly parameters: ElasticSecurityNodeParameters;
    readonly elasticSecurityApiCredentials: Credentials<ElasticSecurityApiCredentials>;
}

/**
 * Consume the Elastic Security API
 */
export class ElasticSecurity<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.elasticSecurity" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ElasticSecurityProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.elasticSecurityApiCredentials];
    }

}
