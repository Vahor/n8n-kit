// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LoneScaleApiCredentials } from "../credentials/LoneScaleApi.ts";
import type { Credentials } from "../../credentials";
import type { LoneScaleNodeParameters } from "../nodes/LoneScale";
import { Node, type NodeProps } from "../../nodes";

export interface LoneScaleProps extends NodeProps, LoneScaleNodeParameters {

    readonly loneScaleApiCredentials: Credentials<LoneScaleApiCredentials>;

}

export class LoneScale<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.loneScale" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LoneScaleProps) {

        super(id, props);

    }

    override getParameters() : Omit<LoneScaleNodeParameters, "loneScaleApiCredentials"> {

        const { loneScaleApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.loneScaleApiCredentials];

    }


}
