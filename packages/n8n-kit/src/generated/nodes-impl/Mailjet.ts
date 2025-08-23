// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailjetEmailApiCredentials } from "../credentials/MailjetEmailApi.ts";
import type { MailjetSmsApiCredentials } from "../credentials/MailjetSmsApi.ts";
import type { Credentials } from "../../credentials";
import type { MailjetNodeParameters } from "../nodes/Mailjet";
import { Node, type NodeProps } from "../../nodes";

export interface MailjetProps extends NodeProps {

    readonly parameters: MailjetNodeParameters;
    readonly mailjetEmailApiCredentials?: Credentials<MailjetEmailApiCredentials>;
    readonly mailjetSmsApiCredentials?: Credentials<MailjetSmsApiCredentials>;

}

/**
 * Consume Mailjet API
 */
export class Mailjet<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mailjet" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: MailjetProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mailjetEmailApiCredentials, this.props!.mailjetSmsApiCredentials];

    }


}
