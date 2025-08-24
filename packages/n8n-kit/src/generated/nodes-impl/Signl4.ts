// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Signl4ApiCredentials } from "../credentials/Signl4Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { Signl4NodeParameters } from "../nodes/Signl4";
import { Node, type NodeProps } from "../../nodes/node";

export interface Signl4Props extends NodeProps {
    readonly parameters: Signl4NodeParameters;
    readonly signl4ApiCredentials: Credentials<Signl4ApiCredentials>;
}

/**
 * Consume SIGNL4 API
 */
export class Signl4<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.signl4" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: Signl4Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.signl4ApiCredentials];
    }

}
