// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AutopilotApiCredentials } from "../credentials/AutopilotApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AutopilotNodeParameters } from "../nodes/Autopilot";
import { Node, type NodeProps } from "../../nodes/node";

export interface AutopilotProps extends NodeProps {
    readonly parameters: AutopilotNodeParameters;
    readonly autopilotApiCredentials: Credentials<AutopilotApiCredentials>;
}

/**
 * Consume Autopilot API
 */
export class Autopilot<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.autopilot" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AutopilotProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.autopilotApiCredentials];
    }

}
