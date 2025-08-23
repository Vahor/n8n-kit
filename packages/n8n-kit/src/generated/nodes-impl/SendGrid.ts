// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SendGridApiCredentials } from "../credentials/SendGridApi.ts";
import type { Credentials } from "../../credentials";
import type { SendGridNodeParameters } from "../nodes/SendGrid";
import { Node, type NodeProps } from "../../nodes";

export interface SendGridProps extends NodeProps, SendGridNodeParameters {

    readonly sendGridApiCredentials: Credentials<SendGridApiCredentials>;

}

export class SendGrid<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.sendGrid" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SendGridProps) {

        super(id, props);

    }

    override getParameters() : Omit<SendGridNodeParameters, "sendGridApiCredentials"> {

        const { sendGridApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.sendGridApiCredentials];

    }


}
