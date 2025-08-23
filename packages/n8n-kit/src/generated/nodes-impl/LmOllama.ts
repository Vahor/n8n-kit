// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OllamaApiCredentials } from "../credentials/OllamaApi.ts";
import type { Credentials } from "../../credentials";
import type { LmOllamaNodeParameters } from "../nodes/LmOllama";
import { Node, type NodeProps } from "../../nodes";

export interface LmOllamaProps extends NodeProps {

    readonly parameters: LmOllamaNodeParameters;
    readonly ollamaApiCredentials: Credentials<OllamaApiCredentials>;

}

/**
 * Language Model Ollama
 */
export class LmOllama<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.lmOllama" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmOllamaProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.ollamaApiCredentials];

    }


}
