// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GotifyApiCredentials } from "../credentials/GotifyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GotifyNodeParameters } from "../nodes/Gotify";
import { Node, type NodeProps } from "../../nodes/node";

export interface GotifyProps extends NodeProps {
    readonly parameters: GotifyNodeParameters;
    readonly gotifyApiCredentials: Credentials<GotifyApiCredentials>;
}

/**
 * Consume Gotify API
 */
export class Gotify<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.gotify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GotifyProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.gotifyApiCredentials];
    }

}
