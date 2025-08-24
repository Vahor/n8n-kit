// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LoneScaleApiCredentials } from "../credentials/LoneScaleApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LoneScaleTriggerNodeParameters } from "../nodes/LoneScaleTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface LoneScaleTriggerProps extends NodeProps {
    readonly parameters: LoneScaleTriggerNodeParameters;
    readonly loneScaleApiCredentials: Credentials<LoneScaleApiCredentials>;
}

/**
 * Trigger LoneScale Workflow
 */
export class LoneScaleTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.loneScaleTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LoneScaleTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.loneScaleApiCredentials];
    }

}
