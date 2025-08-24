// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChargebeeApiCredentials } from "../credentials/ChargebeeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ChargebeeNodeParameters } from "../nodes/Chargebee";
import { Node, type NodeProps } from "../../nodes/node";

export interface ChargebeeProps extends NodeProps {
    readonly parameters: ChargebeeNodeParameters;
    readonly chargebeeApiCredentials: Credentials<ChargebeeApiCredentials>;
}

/**
 * Retrieve data from Chargebee API
 */
export class Chargebee<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.chargebee" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ChargebeeProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.chargebeeApiCredentials];
    }

}
