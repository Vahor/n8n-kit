// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OllamaApiCredentials } from "../credentials/OllamaApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatOllamaNodeParameters } from "../nodes/LmChatOllama";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatOllamaProps extends NodeProps {

    readonly parameters: LmChatOllamaNodeParameters;
    readonly ollamaApiCredentials: Credentials<OllamaApiCredentials>;

}

export class LmChatOllama<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.lmChatOllama" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatOllamaProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.ollamaApiCredentials];

    }


}
