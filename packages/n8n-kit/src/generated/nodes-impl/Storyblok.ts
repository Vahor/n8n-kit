// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StoryblokContentApiCredentials } from "../credentials/StoryblokContentApi.ts";
import type { StoryblokManagementApiCredentials } from "../credentials/StoryblokManagementApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { StoryblokNodeParameters } from "../nodes/Storyblok";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface StoryblokProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: StoryblokNodeParameters;
    readonly storyblokContentApiCredentials?: Credentials<StoryblokContentApiCredentials>;
    readonly storyblokManagementApiCredentials?: Credentials<StoryblokManagementApiCredentials>;
}

/**
 * Consume Storyblok API
 */
export class Storyblok<L extends string, C extends IContext = never, P extends StoryblokProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.storyblok" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.storyblokContentApiCredentials, this.props?.storyblokManagementApiCredentials];
    }

}
