// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZulipApiCredentials } from "../credentials/ZulipApi.ts";
import type { Credentials } from "../../credentials";
import type { ZulipNodeParameters } from "../nodes/Zulip";
import { Node, type NodeProps } from "../../nodes/node";

export interface ZulipProps extends NodeProps {
    readonly parameters: ZulipNodeParameters;
    readonly zulipApiCredentials: Credentials<ZulipApiCredentials>;
}

/**
 * Consume Zulip API
 */
export class Zulip<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.zulip" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ZulipProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.zulipApiCredentials];
    }

}
