// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SendInBlueApiCredentials } from "../credentials/SendInBlueApi";
import type { Credentials } from "../../credentials";
import type { BrevoNodeParameters } from "../nodes/Brevo";
import { Node, type NodeProps } from "../../nodes";

export interface BrevoProps extends NodeProps, BrevoNodeParameters {

    readonly sendInBlueApiCredentials: Credentials<SendInBlueApiCredentials>;

}

export class Brevo<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.sendInBlue" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: BrevoProps) {

        super(id, props);

    }

    override getParameters() {

        const { sendInBlueApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.sendInBlueApiCredentials];

    }


}

