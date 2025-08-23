// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BubbleApiCredentials } from "../credentials/BubbleApi.ts";
import type { Credentials } from "../../credentials";
import type { BubbleNodeParameters } from "../nodes/Bubble";
import { Node, type NodeProps } from "../../nodes";

export interface BubbleProps extends NodeProps, BubbleNodeParameters {

    readonly bubbleApiCredentials: Credentials<BubbleApiCredentials>;

}

export class Bubble<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.bubble" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: BubbleProps) {

        super(id, props);

    }

    override getParameters() : Omit<BubbleNodeParameters, "bubbleApiCredentials"> {

        const { bubbleApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.bubbleApiCredentials];

    }


}
