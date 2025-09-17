// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ElasticSecurityApiCredentials } from "../credentials/ElasticSecurityApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ElasticSecurityNodeParameters } from "../nodes/ElasticSecurity";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ElasticSecurityProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ElasticSecurityNodeParameters;
    readonly elasticSecurityApiCredentials: Credentials<ElasticSecurityApiCredentials>;
}

/**
 * Consume the Elastic Security API
 */
export class ElasticSecurity<L extends string, C extends IContext = never, P extends ElasticSecurityProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.elasticSecurity" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.elasticSecurityApiCredentials];
    }

}
