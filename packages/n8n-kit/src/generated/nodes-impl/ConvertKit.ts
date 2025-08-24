// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ConvertKitApiCredentials } from "../credentials/ConvertKitApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ConvertKitNodeParameters } from "../nodes/ConvertKit";
import { Node, type NodeProps } from "../../nodes/node";

export interface ConvertKitProps extends NodeProps {
    readonly parameters: ConvertKitNodeParameters;
    readonly convertKitApiCredentials: Credentials<ConvertKitApiCredentials>;
}

/**
 * Consume ConvertKit API
 */
export class ConvertKit<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.convertKit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ConvertKitProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.convertKitApiCredentials];
    }

}
