// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CrowdDevApiCredentials } from "../credentials/CrowdDevApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CrowdDevTriggerNodeParameters } from "../nodes/CrowdDevTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CrowdDevTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CrowdDevTriggerNodeParameters;
    readonly crowdDevApiCredentials: Credentials<CrowdDevApiCredentials>;
}

/**
 * Starts the workflow when crowd.dev events occur.
 */
export class CrowdDevTrigger<L extends string, C extends IContext = never, P extends CrowdDevTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.crowdDevTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.crowdDevApiCredentials];
    }

}
