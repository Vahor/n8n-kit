// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IntercomApiCredentials } from "../credentials/IntercomApi.ts";
import type { Credentials } from "../../credentials";
import type { IntercomNodeParameters } from "../nodes/Intercom";
import { Node, type NodeProps } from "../../nodes";

export interface IntercomProps extends NodeProps, IntercomNodeParameters {

    readonly intercomApiCredentials: Credentials<IntercomApiCredentials>;

}

export class Intercom<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.intercom" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: IntercomProps) {

        super(id, props);

    }

    override getParameters() : Omit<IntercomNodeParameters, "intercomApiCredentials"> {

        const { intercomApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.intercomApiCredentials];

    }


}

