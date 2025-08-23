// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DeepSeekApiCredentials } from "../credentials/DeepSeekApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatDeepSeekAINodeParameters } from "../nodes/LmChatDeepSeekAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatDeepSeekAIProps extends NodeProps, LmChatDeepSeekAINodeParameters {

    readonly deepSeekApiCredentials: Credentials<DeepSeekApiCredentials>;

}

export class LmChatDeepSeekAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatDeepSeek" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatDeepSeekAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatDeepSeekAINodeParameters, "deepSeekApiCredentials"> {

        const { deepSeekApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.deepSeekApiCredentials];

    }


}
