// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CrowdDevApiCredentials } from "../credentials/CrowdDevApi.ts";
import type { Credentials } from "../../credentials";
import type { CrowdDevNodeParameters } from "../nodes/CrowdDev";
import { Node, type NodeProps } from "../../nodes";

export interface CrowdDevProps extends NodeProps, CrowdDevNodeParameters {

    readonly crowdDevApiCredentials: Credentials<CrowdDevApiCredentials>;

}

export class CrowdDev<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.crowdDev" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: CrowdDevProps) {

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

