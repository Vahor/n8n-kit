// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DiscordV1NodeParameters } from "../nodes/DiscordV1";
import { Node, type NodeProps } from "../../nodes";

export interface DiscordV1Props extends NodeProps, DiscordV1NodeParameters {


}

export class DiscordV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.discord" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: DiscordV1Props) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

