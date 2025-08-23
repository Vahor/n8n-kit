// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LinearApiCredentials } from "../credentials/LinearApi.ts";
import type { LinearOAuth2ApiCredentials } from "../credentials/LinearOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { LinearNodeParameters } from "../nodes/Linear";
import { Node, type NodeProps } from "../../nodes";

export interface LinearProps extends NodeProps, LinearNodeParameters {

    readonly linearApiCredentials?: Credentials<LinearApiCredentials>;
    readonly linearOAuth2ApiCredentials?: Credentials<LinearOAuth2ApiCredentials>;

}

export class Linear<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.linear" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: LinearProps) {

        super(id, props);

    }

    override getParameters() : Omit<LinearNodeParameters, "linearApiCredentials | linearOAuth2ApiCredentials"> {

        const { linearApiCredentials:_0, linearOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.linearApiCredentials, this.props.linearOAuth2ApiCredentials];

    }


}

