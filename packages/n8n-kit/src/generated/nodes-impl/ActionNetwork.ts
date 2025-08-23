// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ActionNetworkApiCredentials } from "../credentials/ActionNetworkApi.ts";
import type { Credentials } from "../../credentials";
import type { ActionNetworkNodeParameters } from "../nodes/ActionNetwork";
import { Node, type NodeProps } from "../../nodes";

export interface ActionNetworkProps extends NodeProps, ActionNetworkNodeParameters {

    readonly actionNetworkApiCredentials: Credentials<ActionNetworkApiCredentials>;

}

export class ActionNetwork<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.actionNetwork" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ActionNetworkProps) {

        super(id, props);

    }

    override getParameters() {

        const { actionNetworkApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.actionNetworkApiCredentials];

    }


}

