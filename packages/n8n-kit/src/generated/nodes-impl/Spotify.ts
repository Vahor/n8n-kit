// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpotifyOAuth2ApiCredentials } from "../credentials/SpotifyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { SpotifyNodeParameters } from "../nodes/Spotify";
import { Node, type NodeProps } from "../../nodes";

export interface SpotifyProps extends NodeProps, SpotifyNodeParameters {

    readonly spotifyOAuth2ApiCredentials: Credentials<SpotifyOAuth2ApiCredentials>;

}

export class Spotify<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.spotify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SpotifyProps) {

        super(id, props);

    }

    override getParameters() {

        const { spotifyOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.spotifyOAuth2ApiCredentials];

    }


}

