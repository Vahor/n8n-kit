// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MotorheadApiCredentials } from "../credentials/MotorheadApi.ts";
import type { Credentials } from "../../credentials";
import type { MemoryMotorheadNodeParameters } from "../nodes/MemoryMotorhead";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryMotorheadProps extends NodeProps, MemoryMotorheadNodeParameters {

    readonly motorheadApiCredentials: Credentials<MotorheadApiCredentials>;

}

export class MemoryMotorhead<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryMotorhead" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: MemoryMotorheadProps) {

        super(id, props);

    }

    override getParameters() : Omit<MemoryMotorheadNodeParameters, "motorheadApiCredentials"> {

        const { motorheadApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.motorheadApiCredentials];

    }


}
