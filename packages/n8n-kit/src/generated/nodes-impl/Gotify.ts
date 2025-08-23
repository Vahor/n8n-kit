// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GotifyApiCredentials } from "../credentials/GotifyApi.ts";
import type { Credentials } from "../../credentials";
import type { GotifyNodeParameters } from "../nodes/Gotify";
import { Node, type NodeProps } from "../../nodes";

export interface GotifyProps extends NodeProps, GotifyNodeParameters {

    readonly gotifyApiCredentials: Credentials<GotifyApiCredentials>;

}

export class Gotify<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.gotify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: GotifyProps) {

        super(id, props);

    }

    override getParameters() : Omit<GotifyNodeParameters, "gotifyApiCredentials"> {

        const { gotifyApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.gotifyApiCredentials];

    }


}

