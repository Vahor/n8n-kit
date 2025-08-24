// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FreshserviceApiCredentials } from "../credentials/FreshserviceApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FreshserviceNodeParameters } from "../nodes/Freshservice";
import { Node, type NodeProps } from "../../nodes/node";

export interface FreshserviceProps extends NodeProps {
    readonly parameters: FreshserviceNodeParameters;
    readonly freshserviceApiCredentials: Credentials<FreshserviceApiCredentials>;
}

/**
 * Consume the Freshservice API
 */
export class Freshservice<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.freshservice" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FreshserviceProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.freshserviceApiCredentials];
    }

}
