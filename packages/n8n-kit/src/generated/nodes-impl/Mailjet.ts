// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailjetEmailApiCredentials } from "../credentials/MailjetEmailApi.ts";
import type { MailjetSmsApiCredentials } from "../credentials/MailjetSmsApi.ts";
import type { Credentials } from "../../credentials";
import type { MailjetNodeParameters } from "../nodes/Mailjet";
import { Node, type NodeProps } from "../../nodes";

export interface MailjetProps extends NodeProps, MailjetNodeParameters {

    readonly mailjetEmailApiCredentials?: Credentials<MailjetEmailApiCredentials>;
    readonly mailjetSmsApiCredentials?: Credentials<MailjetSmsApiCredentials>;

}

export class Mailjet<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailjet" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MailjetProps) {

        super(id, props);

    }

    override getParameters() : Omit<MailjetNodeParameters, "mailjetEmailApiCredentials | mailjetSmsApiCredentials"> {

        const { mailjetEmailApiCredentials:_0, mailjetSmsApiCredentials:_1, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.mailjetEmailApiCredentials, this.props?.mailjetSmsApiCredentials];

    }


}
