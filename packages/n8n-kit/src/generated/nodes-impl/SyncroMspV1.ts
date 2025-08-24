// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SyncroMspApiCredentials } from "../credentials/SyncroMspApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SyncroMspV1NodeParameters } from "../nodes/SyncroMspV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface SyncroMspV1Props extends NodeProps {
    readonly parameters: SyncroMspV1NodeParameters;
    readonly syncroMspApiCredentials: Credentials<SyncroMspApiCredentials>;
}

/**
 * Gets data from SyncroMSP
 */
export class SyncroMspV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.syncroMsp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SyncroMspV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.syncroMspApiCredentials];
    }

}
