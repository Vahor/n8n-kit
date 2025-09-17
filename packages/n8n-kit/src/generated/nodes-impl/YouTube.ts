// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { YouTubeOAuth2ApiCredentials } from "../credentials/YouTubeOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { YouTubeNodeParameters } from "../nodes/YouTube";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface YouTubeProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: YouTubeNodeParameters;
    readonly youTubeOAuth2ApiCredentials: Credentials<YouTubeOAuth2ApiCredentials>;
}

/**
 * Consume YouTube API
 */
export class YouTube<L extends string, C extends IContext = never, P extends YouTubeProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.youTube" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.youTubeOAuth2ApiCredentials];
    }

}
