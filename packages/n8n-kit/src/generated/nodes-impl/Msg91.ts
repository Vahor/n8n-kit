// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Msg91ApiCredentials } from "../credentials/Msg91Api.ts";
import type { Credentials } from "../../credentials";
import type { Msg91NodeParameters } from "../nodes/Msg91";
import { Node, type NodeProps } from "../../nodes";

export interface Msg91Props extends NodeProps {
    readonly parameters: Msg91NodeParameters;
    readonly msg91ApiCredentials: Credentials<Msg91ApiCredentials>;
}

/**
 * Sends transactional SMS via MSG91
 */
export class Msg91<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.msg91" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: Msg91Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.msg91ApiCredentials];
    }

}
