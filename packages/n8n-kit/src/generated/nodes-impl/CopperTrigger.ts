// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CopperApiCredentials } from "../credentials/CopperApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CopperTriggerNodeParameters } from "../nodes/CopperTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CopperTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CopperTriggerNodeParameters;
    readonly copperApiCredentials: Credentials<CopperApiCredentials>;
}

/**
 * Handle Copper events via webhooks
 */
export class CopperTrigger<L extends string, C extends IContext = never, P extends CopperTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.copperTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.copperApiCredentials];
    }

}
