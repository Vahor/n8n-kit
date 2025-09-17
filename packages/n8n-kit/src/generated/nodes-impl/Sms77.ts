// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Sms77ApiCredentials } from "../credentials/Sms77Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { Sms77NodeParameters } from "../nodes/Sms77";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface Sms77Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: Sms77NodeParameters;
    readonly sms77ApiCredentials: Credentials<Sms77ApiCredentials>;
}

/**
 * Send SMS and make text-to-speech calls
 */
export class Sms77<L extends string, C extends IContext = never, P extends Sms77Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.sms77" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.sms77ApiCredentials];
    }

}
