// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GSuiteAdminOAuth2ApiCredentials } from "../credentials/GSuiteAdminOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GSuiteAdminNodeParameters } from "../nodes/GSuiteAdmin";
import { Node, type NodeProps } from "../../nodes/node";

export interface GSuiteAdminProps extends NodeProps {
    readonly parameters: GSuiteAdminNodeParameters;
    readonly gSuiteAdminOAuth2ApiCredentials: Credentials<GSuiteAdminOAuth2ApiCredentials>;
}

/**
 * Consume Google Workspace Admin API
 */
export class GSuiteAdmin<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.gSuiteAdmin" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GSuiteAdminProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.gSuiteAdminOAuth2ApiCredentials];
    }

}
