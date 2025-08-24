// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HunterApiCredentials } from "../credentials/HunterApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HunterNodeParameters } from "../nodes/Hunter";
import { Node, type NodeProps } from "../../nodes/node";

export interface HunterProps extends NodeProps {
    readonly parameters: HunterNodeParameters;
    readonly hunterApiCredentials: Credentials<HunterApiCredentials>;
}

/**
 * Consume Hunter API
 */
export class Hunter<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.hunter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: HunterProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.hunterApiCredentials];
    }

}
