// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SendyApiCredentials } from "../credentials/SendyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SendyNodeParameters } from "../nodes/Sendy";
import { Node, type NodeProps } from "../../nodes/node";

export interface SendyProps extends NodeProps {
    readonly parameters: SendyNodeParameters;
    readonly sendyApiCredentials: Credentials<SendyApiCredentials>;
}

/**
 * Consume Sendy API
 */
export class Sendy<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.sendy" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SendyProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.sendyApiCredentials];
    }

}
