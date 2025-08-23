// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CopperApiCredentials } from "../credentials/CopperApi.ts";
import type { Credentials } from "../../credentials";
import type { CopperNodeParameters } from "../nodes/Copper";
import { Node, type NodeProps } from "../../nodes";

export interface CopperProps extends NodeProps, CopperNodeParameters {

    readonly copperApiCredentials: Credentials<CopperApiCredentials>;

}

export class Copper<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.copper" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CopperProps) {

        super(id, props);

    }

    override getParameters() : Omit<CopperNodeParameters, "copperApiCredentials"> {

        const { copperApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.copperApiCredentials];

    }


}
