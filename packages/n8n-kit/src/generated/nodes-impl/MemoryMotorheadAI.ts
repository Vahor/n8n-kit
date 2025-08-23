// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MotorheadApiCredentials } from "../credentials/MotorheadApi.ts";
import type { Credentials } from "../../credentials";
import type { MemoryMotorheadAINodeParameters } from "../nodes/MemoryMotorheadAI";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryMotorheadAIProps extends NodeProps, MemoryMotorheadAINodeParameters {

    readonly motorheadApiCredentials: Credentials<MotorheadApiCredentials>;

}

export class MemoryMotorheadAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryMotorhead" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: MemoryMotorheadAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<MemoryMotorheadAINodeParameters, "motorheadApiCredentials"> {

        const { motorheadApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.motorheadApiCredentials];

    }


}

