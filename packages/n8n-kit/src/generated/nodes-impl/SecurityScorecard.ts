// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SecurityScorecardApiCredentials } from "../credentials/SecurityScorecardApi.ts";
import type { Credentials } from "../../credentials";
import type { SecurityScorecardNodeParameters } from "../nodes/SecurityScorecard";
import { Node, type NodeProps } from "../../nodes";

export interface SecurityScorecardProps extends NodeProps, SecurityScorecardNodeParameters {

    readonly securityScorecardApiCredentials: Credentials<SecurityScorecardApiCredentials>;

}

export class SecurityScorecard<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.securityScorecard" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SecurityScorecardProps) {

        super(id, props);

    }

    override getParameters() : Omit<SecurityScorecardNodeParameters, "securityScorecardApiCredentials"> {

        const { securityScorecardApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.securityScorecardApiCredentials];

    }


}
