// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ContentfulApiCredentials } from "../credentials/ContentfulApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ContentfulNodeParameters } from "../nodes/Contentful";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ContentfulProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ContentfulNodeParameters;
    readonly contentfulApiCredentials: Credentials<ContentfulApiCredentials>;
}

/**
 * Consume Contentful API
 */
export class Contentful<L extends string, C extends IContext = never, P extends ContentfulProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.contentful" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.contentfulApiCredentials];
    }

}
