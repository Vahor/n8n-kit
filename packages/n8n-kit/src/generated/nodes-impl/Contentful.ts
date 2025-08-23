// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ContentfulApiCredentials } from "../credentials/ContentfulApi.ts";
import type { Credentials } from "../../credentials";
import type { ContentfulNodeParameters } from "../nodes/Contentful";
import { Node, type NodeProps } from "../../nodes";

export interface ContentfulProps extends NodeProps {

    readonly parameters: ContentfulNodeParameters;
    readonly contentfulApiCredentials: Credentials<ContentfulApiCredentials>;

}

/**
 * Consume Contentful API
 */
export class Contentful<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.contentful" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ContentfulProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.contentfulApiCredentials];

    }


}
