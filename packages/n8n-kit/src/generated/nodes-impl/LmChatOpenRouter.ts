// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenRouterApiCredentials } from "../credentials/OpenRouterApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatOpenRouterNodeParameters } from "../nodes/LmChatOpenRouter";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatOpenRouterProps extends NodeProps {

    readonly parameters: LmChatOpenRouterNodeParameters;
    readonly openRouterApiCredentials: Credentials<OpenRouterApiCredentials>;

}

/**
 * For advanced usage with an AI chain
 */
export class LmChatOpenRouter<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.lmChatOpenRouter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatOpenRouterProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.openRouterApiCredentials];

    }


}
