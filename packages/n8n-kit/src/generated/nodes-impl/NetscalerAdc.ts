// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CitrixAdcApiCredentials } from "../credentials/CitrixAdcApi";
import type { Credentials } from "../../credentials";
import type { NetscalerAdcNodeParameters } from "../nodes/NetscalerAdc";
import { Node, type NodeProps } from "../../nodes";

export interface NetscalerAdcProps extends NodeProps, NetscalerAdcNodeParameters {

    readonly citrixAdcApiCredentials: Credentials<CitrixAdcApiCredentials>;

}

export class NetscalerAdc<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.citrixAdc" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: NetscalerAdcProps) {

        super(id, props);

    }

    override getParameters() {

        const { citrixAdcApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.citrixAdcApiCredentials];

    }


}

