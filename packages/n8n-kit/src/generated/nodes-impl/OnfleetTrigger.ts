// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OnfleetApiCredentials } from "../credentials/OnfleetApi.ts";
import type { Credentials } from "../../credentials";
import type { OnfleetTriggerNodeParameters } from "../nodes/OnfleetTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface OnfleetTriggerProps extends NodeProps, OnfleetTriggerNodeParameters {

    readonly onfleetApiCredentials: Credentials<OnfleetApiCredentials>;

}

export class OnfleetTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.onfleetTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: OnfleetTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<OnfleetTriggerNodeParameters, "onfleetApiCredentials"> {

        const { onfleetApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.onfleetApiCredentials];

    }


}

