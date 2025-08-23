// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NetlifyApiCredentials } from "../credentials/NetlifyApi.ts";
import type { Credentials } from "../../credentials";
import type { NetlifyTriggerNodeParameters } from "../nodes/NetlifyTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface NetlifyTriggerProps extends NodeProps, NetlifyTriggerNodeParameters {

    readonly netlifyApiCredentials: Credentials<NetlifyApiCredentials>;

}

export class NetlifyTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.netlifyTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: NetlifyTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<NetlifyTriggerNodeParameters, "netlifyApiCredentials"> {

        const { netlifyApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.netlifyApiCredentials];

    }


}
