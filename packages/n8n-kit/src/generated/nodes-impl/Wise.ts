// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WiseApiCredentials } from "../credentials/WiseApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WiseNodeParameters } from "../nodes/Wise";
import { Node, type NodeProps } from "../../nodes/node";

export interface WiseProps extends NodeProps {
    readonly parameters: WiseNodeParameters;
    readonly wiseApiCredentials: Credentials<WiseApiCredentials>;
}

/**
 * Consume the Wise API
 */
export class Wise<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.wise" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WiseProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.wiseApiCredentials];
    }

}
