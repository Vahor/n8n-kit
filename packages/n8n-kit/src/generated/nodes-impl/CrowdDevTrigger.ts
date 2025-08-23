// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CrowdDevApiCredentials } from "../credentials/CrowdDevApi.ts";
import type { Credentials } from "../../credentials";
import type { CrowdDevTriggerNodeParameters } from "../nodes/CrowdDevTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface CrowdDevTriggerProps extends NodeProps, CrowdDevTriggerNodeParameters {

    readonly crowdDevApiCredentials: Credentials<CrowdDevApiCredentials>;

}

export class CrowdDevTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.crowdDevTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: CrowdDevTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { crowdDevApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.crowdDevApiCredentials];

    }


}

