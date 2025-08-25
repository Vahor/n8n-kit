// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AdaloApiCredentials } from "../credentials/AdaloApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AdaloNodeParameters } from "../nodes/Adalo";
import { Node, type NodeProps } from "../../nodes/node";

export interface AdaloProps extends NodeProps {
    readonly parameters: AdaloNodeParameters;
    readonly adaloApiCredentials: Credentials<AdaloApiCredentials>;
}

/**
 * Consume Adalo API
 */
export class Adalo<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.adalo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AdaloProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.adaloApiCredentials];
    }

}
