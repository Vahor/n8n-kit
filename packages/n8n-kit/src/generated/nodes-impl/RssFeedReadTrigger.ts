// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RssFeedReadTriggerNodeParameters } from "../nodes/RssFeedReadTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface RssFeedReadTriggerProps extends NodeProps, RssFeedReadTriggerNodeParameters {


}

export class RssFeedReadTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.rssFeedReadTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: RssFeedReadTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

