// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AutopilotApiCredentials } from "../credentials/AutopilotApi.ts";
import type { Credentials } from "../../credentials";
import type { AutopilotNodeParameters } from "../nodes/Autopilot";
import { Node, type NodeProps } from "../../nodes";

export interface AutopilotProps extends NodeProps, AutopilotNodeParameters {

    readonly autopilotApiCredentials: Credentials<AutopilotApiCredentials>;

}

export class Autopilot<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.autopilot" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: AutopilotProps) {

        super(id, props);

    }

    override getParameters() {

        const { autopilotApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.autopilotApiCredentials];

    }


}

