// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UptimeRobotApiCredentials } from "../credentials/UptimeRobotApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { UptimeRobotNodeParameters } from "../nodes/UptimeRobot";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface UptimeRobotProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: UptimeRobotNodeParameters;
    readonly uptimeRobotApiCredentials: Credentials<UptimeRobotApiCredentials>;
}

/**
 * Consume UptimeRobot API
 */
export class UptimeRobot<L extends string, C extends IContext = never, P extends UptimeRobotProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.uptimeRobot" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.uptimeRobotApiCredentials];
    }

}
