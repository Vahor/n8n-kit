// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UptimeRobotApiCredentials } from "../credentials/UptimeRobotApi.ts";
import type { Credentials } from "../../credentials";
import type { UptimeRobotNodeParameters } from "../nodes/UptimeRobot";
import { Node, type NodeProps } from "../../nodes";

export interface UptimeRobotProps extends NodeProps {

    readonly parameters: UptimeRobotNodeParameters;
    readonly uptimeRobotApiCredentials: Credentials<UptimeRobotApiCredentials>;

}

/**
 * Consume UptimeRobot API
 */
export class UptimeRobot<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.uptimeRobot" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: UptimeRobotProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.uptimeRobotApiCredentials];

    }


}
