// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Msg91ApiCredentials } from "../credentials/Msg91Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { Msg91NodeParameters } from "../nodes/Msg91";
import { Node, type NodeProps } from "../../nodes/node";

export interface Msg91Props extends NodeProps {
    readonly parameters: Msg91NodeParameters;
    readonly msg91ApiCredentials: Credentials<Msg91ApiCredentials>;
}

/**
 * Sends transactional SMS via MSG91
 */
export class Msg91<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.msg91" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: Msg91Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.msg91ApiCredentials];
    }

}
