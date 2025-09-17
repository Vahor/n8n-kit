// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SendGridApiCredentials } from "../credentials/SendGridApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SendGridNodeParameters } from "../nodes/SendGrid";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SendGridProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SendGridNodeParameters;
    readonly sendGridApiCredentials: Credentials<SendGridApiCredentials>;
}

/**
 * Consume SendGrid API
 */
export class SendGrid<L extends string, C extends IContext = never, P extends SendGridProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.sendGrid" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.sendGridApiCredentials];
    }

}
