// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwistOAuth2ApiCredentials } from "../credentials/TwistOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TwistNodeParameters } from "../nodes/Twist";
import { Node, type NodeProps } from "../../nodes/node";

export interface TwistProps extends NodeProps {
    readonly parameters: TwistNodeParameters;
    readonly twistOAuth2ApiCredentials: Credentials<TwistOAuth2ApiCredentials>;
}

/**
 * Consume Twist API
 */
export class Twist<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.twist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TwistProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.twistOAuth2ApiCredentials];
    }

}
