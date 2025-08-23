// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BambooHrApiCredentials } from "../credentials/BambooHrApi.ts";
import type { Credentials } from "../../credentials";
import type { BambooHrNodeParameters } from "../nodes/BambooHr";
import { Node, type NodeProps } from "../../nodes";

export interface BambooHrProps extends NodeProps, BambooHrNodeParameters {

    readonly bambooHrApiCredentials: Credentials<BambooHrApiCredentials>;

}

export class BambooHr<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.bambooHr" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: BambooHrProps) {

        super(id, props);

    }

    override getParameters() : Omit<BambooHrNodeParameters, "bambooHrApiCredentials"> {

        const { bambooHrApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.bambooHrApiCredentials];

    }


}

