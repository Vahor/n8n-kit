// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GroqApiCredentials } from "../credentials/GroqApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatGroqNodeParameters } from "../nodes/LmChatGroq";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatGroqProps extends NodeProps, LmChatGroqNodeParameters {

    readonly groqApiCredentials: Credentials<GroqApiCredentials>;

}

export class LmChatGroq<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatGroq" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatGroqProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatGroqNodeParameters, "groqApiCredentials"> {

        const { groqApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.groqApiCredentials];

    }


}
