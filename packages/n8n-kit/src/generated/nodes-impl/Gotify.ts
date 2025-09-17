// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GotifyApiCredentials } from "../credentials/GotifyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GotifyNodeParameters } from "../nodes/Gotify";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GotifyProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GotifyNodeParameters;
    readonly gotifyApiCredentials: Credentials<GotifyApiCredentials>;
}

/**
 * Consume Gotify API
 */
export class Gotify<L extends string, C extends IContext = never, P extends GotifyProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.gotify" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.gotifyApiCredentials];
    }

}
