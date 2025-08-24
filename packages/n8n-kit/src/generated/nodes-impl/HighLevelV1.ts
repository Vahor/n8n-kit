// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HighLevelApiCredentials } from "../credentials/HighLevelApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HighLevelV1NodeParameters } from "../nodes/HighLevelV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface HighLevelV1Props extends NodeProps {
    readonly parameters: HighLevelV1NodeParameters;
    readonly highLevelApiCredentials: Credentials<HighLevelApiCredentials>;
}

/**
 * Consume HighLevel API v1
 */
export class HighLevelV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.highLevel" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: HighLevelV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.highLevelApiCredentials];
    }

}
