// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FlowApiCredentials } from "../credentials/FlowApi.ts";
import type { Credentials } from "../../credentials";
import type { FlowNodeParameters } from "../nodes/Flow";
import { Node, type NodeProps } from "../../nodes";

export interface FlowProps extends NodeProps, FlowNodeParameters {

    readonly flowApiCredentials: Credentials<FlowApiCredentials>;

}

export class Flow<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.flow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: FlowProps) {

        super(id, props);

    }

    override getParameters() {

        const { flowApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.flowApiCredentials];

    }


}

