// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WekanApiCredentials } from "../credentials/WekanApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WekanNodeParameters } from "../nodes/Wekan";
import { Node, type NodeProps } from "../../nodes/node";

export interface WekanProps extends NodeProps {
    readonly parameters: WekanNodeParameters;
    readonly wekanApiCredentials: Credentials<WekanApiCredentials>;
}

/**
 * Consume Wekan API
 */
export class Wekan<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.wekan" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WekanProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.wekanApiCredentials];
    }

}
