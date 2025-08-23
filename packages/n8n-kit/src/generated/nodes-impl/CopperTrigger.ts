// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CopperApiCredentials } from "../credentials/CopperApi.ts";
import type { Credentials } from "../../credentials";
import type { CopperTriggerNodeParameters } from "../nodes/CopperTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface CopperTriggerProps extends NodeProps, CopperTriggerNodeParameters {

    readonly copperApiCredentials: Credentials<CopperApiCredentials>;

}

export class CopperTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.copperTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: CopperTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { copperApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.copperApiCredentials];

    }


}

