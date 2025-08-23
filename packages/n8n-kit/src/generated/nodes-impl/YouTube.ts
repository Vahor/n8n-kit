// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { YouTubeOAuth2ApiCredentials } from "../credentials/YouTubeOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { YouTubeNodeParameters } from "../nodes/YouTube";
import { Node, type NodeProps } from "../../nodes";

export interface YouTubeProps extends NodeProps, YouTubeNodeParameters {

    readonly youTubeOAuth2ApiCredentials: Credentials<YouTubeOAuth2ApiCredentials>;

}

export class YouTube<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.youTube" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: YouTubeProps) {

        super(id, props);

    }

    override getParameters() {

        const { youTubeOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.youTubeOAuth2ApiCredentials];

    }


}

