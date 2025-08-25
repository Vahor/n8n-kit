// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NetlifyApiCredentials } from "../credentials/NetlifyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NetlifyNodeParameters } from "../nodes/Netlify";
import { Node, type NodeProps } from "../../nodes/node";

export interface NetlifyProps extends NodeProps {
    readonly parameters: NetlifyNodeParameters;
    readonly netlifyApiCredentials: Credentials<NetlifyApiCredentials>;
}

/**
 * Consume Netlify API
 */
export class Netlify<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.netlify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: NetlifyProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.netlifyApiCredentials];
    }

}
