// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwistOAuth2ApiCredentials } from "../credentials/TwistOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TwistNodeParameters } from "../nodes/Twist";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TwistProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TwistNodeParameters;
    readonly twistOAuth2ApiCredentials: Credentials<TwistOAuth2ApiCredentials>;
}

/**
 * Consume Twist API
 */
export class Twist<L extends string, C extends IContext = never, P extends TwistProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.twist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.twistOAuth2ApiCredentials];
    }

}
