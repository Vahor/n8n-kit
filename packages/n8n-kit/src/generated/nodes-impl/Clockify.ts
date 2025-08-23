// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ClockifyApiCredentials } from "../credentials/ClockifyApi.ts";
import type { Credentials } from "../../credentials";
import type { ClockifyNodeParameters } from "../nodes/Clockify";
import { Node, type NodeProps } from "../../nodes";

export interface ClockifyProps extends NodeProps {

    readonly parameters: ClockifyNodeParameters;
    readonly clockifyApiCredentials: Credentials<ClockifyApiCredentials>;

}

/**
 * Consume Clockify REST API
 */
export class Clockify<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.clockify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ClockifyProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.clockifyApiCredentials];

    }


}
