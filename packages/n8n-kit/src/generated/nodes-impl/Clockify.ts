// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ClockifyApiCredentials } from "../credentials/ClockifyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ClockifyNodeParameters } from "../nodes/Clockify";
import { Node, type NodeProps } from "../../nodes/node";

export interface ClockifyProps extends NodeProps {
    readonly parameters: ClockifyNodeParameters;
    readonly clockifyApiCredentials: Credentials<ClockifyApiCredentials>;
}

/**
 * Consume Clockify REST API
 */
export class Clockify<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.clockify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ClockifyProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.clockifyApiCredentials];
    }

}
