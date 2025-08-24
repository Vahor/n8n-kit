// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PlivoApiCredentials } from "../credentials/PlivoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PlivoNodeParameters } from "../nodes/Plivo";
import { Node, type NodeProps } from "../../nodes/node";

export interface PlivoProps extends NodeProps {
    readonly parameters: PlivoNodeParameters;
    readonly plivoApiCredentials: Credentials<PlivoApiCredentials>;
}

/**
 * Send SMS/MMS messages or make phone calls
 */
export class Plivo<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.plivo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PlivoProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.plivoApiCredentials];
    }

}
