// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DeepSeekApiCredentials } from "../credentials/DeepSeekApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatDeepSeekNodeParameters } from "../nodes/LmChatDeepSeek";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatDeepSeekProps extends NodeProps, LmChatDeepSeekNodeParameters {

    readonly deepSeekApiCredentials: Credentials<DeepSeekApiCredentials>;

}

export class LmChatDeepSeek<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatDeepSeek" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatDeepSeekProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatDeepSeekNodeParameters, "deepSeekApiCredentials"> {

        const { deepSeekApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.deepSeekApiCredentials];

    }


}
