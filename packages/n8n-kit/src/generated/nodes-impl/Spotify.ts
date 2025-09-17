// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpotifyOAuth2ApiCredentials } from "../credentials/SpotifyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SpotifyNodeParameters } from "../nodes/Spotify";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SpotifyProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SpotifyNodeParameters;
    readonly spotifyOAuth2ApiCredentials: Credentials<SpotifyOAuth2ApiCredentials>;
}

/**
 * Access public song data via the Spotify API
 */
export class Spotify<L extends string, C extends IContext = never, P extends SpotifyProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.spotify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.spotifyOAuth2ApiCredentials];
    }

}
