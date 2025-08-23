// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FacebookGraphAppApiCredentials } from "../credentials/FacebookGraphAppApi.ts";
import type { Credentials } from "../../credentials";
import type { FacebookTriggerNodeParameters } from "../nodes/FacebookTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface FacebookTriggerProps extends NodeProps, FacebookTriggerNodeParameters {

    readonly facebookGraphAppApiCredentials: Credentials<FacebookGraphAppApiCredentials>;

}

export class FacebookTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.facebookTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: FacebookTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { facebookGraphAppApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.facebookGraphAppApiCredentials];

    }


}

