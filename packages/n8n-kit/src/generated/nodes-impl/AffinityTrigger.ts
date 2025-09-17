// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AffinityApiCredentials } from "../credentials/AffinityApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AffinityTriggerNodeParameters } from "../nodes/AffinityTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AffinityTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AffinityTriggerNodeParameters;
    readonly affinityApiCredentials: Credentials<AffinityApiCredentials>;
}

/**
 * Handle Affinity events via webhooks
 */
export class AffinityTrigger<L extends string, C extends IContext = never, P extends AffinityTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.affinityTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.affinityApiCredentials];
    }

}
