// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UptimeRobotApiCredentials } from "../credentials/UptimeRobotApi.ts";
import type { Credentials } from "../../credentials";
import type { UptimeRobotNodeParameters } from "../nodes/UptimeRobot";
import { Node, type NodeProps } from "../../nodes";

export interface UptimeRobotProps extends NodeProps, UptimeRobotNodeParameters {

    readonly uptimeRobotApiCredentials: Credentials<UptimeRobotApiCredentials>;

}

export class UptimeRobot<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.uptimeRobot" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: UptimeRobotProps) {

        super(id, props);

    }

    override getParameters() {

        const { uptimeRobotApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.uptimeRobotApiCredentials];

    }


}

