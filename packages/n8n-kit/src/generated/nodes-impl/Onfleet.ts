// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OnfleetApiCredentials } from "../credentials/OnfleetApi.ts";
import type { Credentials } from "../../credentials";
import type { OnfleetNodeParameters } from "../nodes/Onfleet";
import { Node, type NodeProps } from "../../nodes";

export interface OnfleetProps extends NodeProps, OnfleetNodeParameters {

    readonly onfleetApiCredentials: Credentials<OnfleetApiCredentials>;

}

export class Onfleet<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.onfleet" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: OnfleetProps) {

        super(id, props);

    }

    override getParameters() {

        const { onfleetApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.onfleetApiCredentials];

    }


}

