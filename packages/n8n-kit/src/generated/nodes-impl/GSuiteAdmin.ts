// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GSuiteAdminOAuth2ApiCredentials } from "../credentials/GSuiteAdminOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GSuiteAdminNodeParameters } from "../nodes/GSuiteAdmin";
import { Node, type NodeProps } from "../../nodes";

export interface GSuiteAdminProps extends NodeProps, GSuiteAdminNodeParameters {

    readonly gSuiteAdminOAuth2ApiCredentials: Credentials<GSuiteAdminOAuth2ApiCredentials>;

}

export class GSuiteAdmin<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.gSuiteAdmin" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GSuiteAdminProps) {

        super(id, props);

    }

    override getParameters() {

        const { gSuiteAdminOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.gSuiteAdminOAuth2ApiCredentials];

    }


}

