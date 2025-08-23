// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailjetEmailApiCredentials } from "../credentials/MailjetEmailApi.ts";
import type { Credentials } from "../../credentials";
import type { MailjetTriggerNodeParameters } from "../nodes/MailjetTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface MailjetTriggerProps extends NodeProps, MailjetTriggerNodeParameters {

    readonly mailjetEmailApiCredentials: Credentials<MailjetEmailApiCredentials>;

}

export class MailjetTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailjetTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MailjetTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { mailjetEmailApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mailjetEmailApiCredentials];

    }


}

