// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AutopilotApiCredentials } from "../credentials/AutopilotApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AutopilotTriggerNodeParameters } from "../nodes/AutopilotTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AutopilotTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AutopilotTriggerNodeParameters;
    readonly autopilotApiCredentials: Credentials<AutopilotApiCredentials>;
}

/**
 * Handle Autopilot events via webhooks
 */
export class AutopilotTrigger<L extends string, C extends IContext = never, P extends AutopilotTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.autopilotTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.autopilotApiCredentials];
    }

}
