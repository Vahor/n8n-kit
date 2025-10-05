// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WhatsAppApiCredentials } from "../credentials/WhatsAppApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WhatsAppNodeParameters } from "../nodes/WhatsApp";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WhatsAppProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WhatsAppNodeParameters;
    readonly whatsAppApiCredentials: Credentials<WhatsAppApiCredentials>;
}

/**
 * Access WhatsApp API
 */
export class WhatsApp<L extends string, C extends IContext = never, P extends WhatsAppProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.whatsApp" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.whatsAppApiCredentials];
    }

}
