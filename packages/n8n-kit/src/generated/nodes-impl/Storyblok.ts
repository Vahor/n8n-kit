// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StoryblokContentApiCredentials } from "../credentials/StoryblokContentApi.ts";
import type { StoryblokManagementApiCredentials } from "../credentials/StoryblokManagementApi.ts";
import type { Credentials } from "../../credentials";
import type { StoryblokNodeParameters } from "../nodes/Storyblok";
import { Node, type NodeProps } from "../../nodes";

export interface StoryblokProps extends NodeProps {

    readonly parameters: StoryblokNodeParameters;
    readonly storyblokContentApiCredentials?: Credentials<StoryblokContentApiCredentials>;
    readonly storyblokManagementApiCredentials?: Credentials<StoryblokManagementApiCredentials>;

}

export class Storyblok<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.storyblok" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: StoryblokProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.storyblokContentApiCredentials, this.props!.storyblokManagementApiCredentials];

    }


}
