// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MistralCloudApiCredentials } from "../credentials/MistralCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatMistralCloudAINodeParameters } from "../nodes/LmChatMistralCloudAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatMistralCloudAIProps extends NodeProps, LmChatMistralCloudAINodeParameters {

    readonly mistralCloudApiCredentials: Credentials<MistralCloudApiCredentials>;

}

export class LmChatMistralCloudAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatMistralCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatMistralCloudAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatMistralCloudAINodeParameters, "mistralCloudApiCredentials"> {

        const { mistralCloudApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mistralCloudApiCredentials];

    }


}

