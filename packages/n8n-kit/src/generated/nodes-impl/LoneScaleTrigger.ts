// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LoneScaleApiCredentials } from "../credentials/LoneScaleApi.ts";
import type { Credentials } from "../../credentials";
import type { LoneScaleTriggerNodeParameters } from "../nodes/LoneScaleTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface LoneScaleTriggerProps extends NodeProps, LoneScaleTriggerNodeParameters {

    readonly loneScaleApiCredentials: Credentials<LoneScaleApiCredentials>;

}

export class LoneScaleTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.loneScaleTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: LoneScaleTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { loneScaleApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.loneScaleApiCredentials];

    }


}

