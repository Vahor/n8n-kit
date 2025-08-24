// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { YouTubeOAuth2ApiCredentials } from "../credentials/YouTubeOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { YouTubeNodeParameters } from "../nodes/YouTube";
import { Node, type NodeProps } from "../../nodes/node";

export interface YouTubeProps extends NodeProps {
    readonly parameters: YouTubeNodeParameters;
    readonly youTubeOAuth2ApiCredentials: Credentials<YouTubeOAuth2ApiCredentials>;
}

/**
 * Consume YouTube API
 */
export class YouTube<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.youTube" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: YouTubeProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.youTubeOAuth2ApiCredentials];
    }

}
