// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpotifyOAuth2ApiCredentials } from "../credentials/SpotifyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { SpotifyNodeParameters } from "../nodes/Spotify";
import { Node, type NodeProps } from "../../nodes/node";

export interface SpotifyProps extends NodeProps {
    readonly parameters: SpotifyNodeParameters;
    readonly spotifyOAuth2ApiCredentials: Credentials<SpotifyOAuth2ApiCredentials>;
}

/**
 * Access public song data via the Spotify API
 */
export class Spotify<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.spotify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SpotifyProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.spotifyOAuth2ApiCredentials];
    }

}
