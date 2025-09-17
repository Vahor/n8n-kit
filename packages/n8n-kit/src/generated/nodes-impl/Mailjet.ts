// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MailjetEmailApiCredentials } from "../credentials/MailjetEmailApi.ts";
import type { MailjetSmsApiCredentials } from "../credentials/MailjetSmsApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MailjetNodeParameters } from "../nodes/Mailjet";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MailjetProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MailjetNodeParameters;
    readonly mailjetEmailApiCredentials?: Credentials<MailjetEmailApiCredentials>;
    readonly mailjetSmsApiCredentials?: Credentials<MailjetSmsApiCredentials>;
}

/**
 * Consume Mailjet API
 */
export class Mailjet<L extends string, C extends IContext = never, P extends MailjetProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mailjet" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.mailjetEmailApiCredentials, this.props?.mailjetSmsApiCredentials];
    }

}
