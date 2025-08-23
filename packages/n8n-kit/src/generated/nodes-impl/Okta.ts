// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OktaApiCredentials } from "../credentials/OktaApi.ts";
import type { Credentials } from "../../credentials";
import type { OktaNodeParameters } from "../nodes/Okta";
import { Node, type NodeProps } from "../../nodes";

export interface OktaProps extends NodeProps, OktaNodeParameters {

    readonly oktaApiCredentials: Credentials<OktaApiCredentials>;

}

export class Okta<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.okta" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: OktaProps) {

        super(id, props);

    }

    override getParameters() {

        const { oktaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.oktaApiCredentials];

    }


}

