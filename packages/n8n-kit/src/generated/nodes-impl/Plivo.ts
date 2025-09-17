// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PlivoApiCredentials } from "../credentials/PlivoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PlivoNodeParameters } from "../nodes/Plivo";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PlivoProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PlivoNodeParameters;
    readonly plivoApiCredentials: Credentials<PlivoApiCredentials>;
}

/**
 * Send SMS/MMS messages or make phone calls
 */
export class Plivo<L extends string, C extends IContext = never, P extends PlivoProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.plivo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.plivoApiCredentials];
    }

}
