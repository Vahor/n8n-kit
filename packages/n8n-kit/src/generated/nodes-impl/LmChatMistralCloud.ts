// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MistralCloudApiCredentials } from "../credentials/MistralCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatMistralCloudNodeParameters } from "../nodes/LmChatMistralCloud";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatMistralCloudProps extends NodeProps {

    readonly parameters: LmChatMistralCloudNodeParameters;
    readonly mistralCloudApiCredentials: Credentials<MistralCloudApiCredentials>;

}

/**
 * For advanced usage with an AI chain
 */
export class LmChatMistralCloud<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.lmChatMistralCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatMistralCloudProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mistralCloudApiCredentials];

    }


}
