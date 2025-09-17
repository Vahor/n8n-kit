// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LoneScaleApiCredentials } from "../credentials/LoneScaleApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LoneScaleTriggerNodeParameters } from "../nodes/LoneScaleTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LoneScaleTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LoneScaleTriggerNodeParameters;
    readonly loneScaleApiCredentials: Credentials<LoneScaleApiCredentials>;
}

/**
 * Trigger LoneScale Workflow
 */
export class LoneScaleTrigger<L extends string, C extends IContext = never, P extends LoneScaleTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.loneScaleTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.loneScaleApiCredentials];
    }

}
