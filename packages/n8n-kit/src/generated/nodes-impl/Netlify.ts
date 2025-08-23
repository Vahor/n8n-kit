// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NetlifyApiCredentials } from "../credentials/NetlifyApi.ts";
import type { Credentials } from "../../credentials";
import type { NetlifyNodeParameters } from "../nodes/Netlify";
import { Node, type NodeProps } from "../../nodes";

export interface NetlifyProps extends NodeProps, NetlifyNodeParameters {

    readonly netlifyApiCredentials: Credentials<NetlifyApiCredentials>;

}

export class Netlify<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.netlify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: NetlifyProps) {

        super(id, props);

    }

    override getParameters() : Omit<NetlifyNodeParameters, "netlifyApiCredentials"> {

        const { netlifyApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.netlifyApiCredentials];

    }


}
