// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HackerNewsNodeParameters } from "../nodes/HackerNews";
import { Node, type NodeProps } from "../../nodes";

export interface HackerNewsProps extends NodeProps, HackerNewsNodeParameters {


}

export class HackerNews<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.hackerNews" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: HackerNewsProps) {

        super(id, props);

    }

    override getParameters() : HackerNewsNodeParameters {

        return this.props ?? {};

    }


}
