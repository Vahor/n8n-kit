// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SecurityScorecardApiCredentials } from "../credentials/SecurityScorecardApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SecurityScorecardNodeParameters } from "../nodes/SecurityScorecard";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SecurityScorecardProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SecurityScorecardNodeParameters;
    readonly securityScorecardApiCredentials: Credentials<SecurityScorecardApiCredentials>;
}

/**
 * Consume SecurityScorecard API
 */
export class SecurityScorecard<L extends string, C extends IContext = never, P extends SecurityScorecardProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.securityScorecard" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.securityScorecardApiCredentials];
    }

}
