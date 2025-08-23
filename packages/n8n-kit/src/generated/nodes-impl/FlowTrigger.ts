// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FlowApiCredentials } from "../credentials/FlowApi.ts";
import type { Credentials } from "../../credentials";
import type { FlowTriggerNodeParameters } from "../nodes/FlowTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface FlowTriggerProps extends NodeProps, FlowTriggerNodeParameters {

    readonly flowApiCredentials: Credentials<FlowApiCredentials>;

}

export class FlowTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.flowTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: FlowTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<FlowTriggerNodeParameters, "flowApiCredentials"> {

        const { flowApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.flowApiCredentials];

    }


}

