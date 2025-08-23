// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwistOAuth2ApiCredentials } from "../credentials/TwistOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { TwistNodeParameters } from "../nodes/Twist";
import { Node, type NodeProps } from "../../nodes";

export interface TwistProps extends NodeProps, TwistNodeParameters {

    readonly twistOAuth2ApiCredentials: Credentials<TwistOAuth2ApiCredentials>;

}

export class Twist<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.twist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TwistProps) {

        super(id, props);

    }

    override getParameters() : Omit<TwistNodeParameters, "twistOAuth2ApiCredentials"> {

        const { twistOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.twistOAuth2ApiCredentials];

    }


}

