// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AffinityApiCredentials } from "../credentials/AffinityApi.ts";
import type { Credentials } from "../../credentials";
import type { AffinityTriggerNodeParameters } from "../nodes/AffinityTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface AffinityTriggerProps extends NodeProps, AffinityTriggerNodeParameters {

    readonly affinityApiCredentials: Credentials<AffinityApiCredentials>;

}

export class AffinityTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.affinityTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AffinityTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<AffinityTriggerNodeParameters, "affinityApiCredentials"> {

        const { affinityApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.affinityApiCredentials];

    }


}

