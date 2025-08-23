// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SendyApiCredentials } from "../credentials/SendyApi.ts";
import type { Credentials } from "../../credentials";
import type { SendyNodeParameters } from "../nodes/Sendy";
import { Node, type NodeProps } from "../../nodes";

export interface SendyProps extends NodeProps, SendyNodeParameters {

    readonly sendyApiCredentials: Credentials<SendyApiCredentials>;

}

export class Sendy<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.sendy" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SendyProps) {

        super(id, props);

    }

    override getParameters() : Omit<SendyNodeParameters, "sendyApiCredentials"> {

        const { sendyApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.sendyApiCredentials];

    }


}

