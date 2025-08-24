// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { OpenAiNodeParameters } from "../nodes/OpenAi";
import { Node, type NodeProps } from "../../nodes/node";

export interface OpenAiProps extends NodeProps {
    readonly parameters: OpenAiNodeParameters;
    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;
}

/**
 * Consume Open AI
 */
export class OpenAi<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.openAi" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: OpenAiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.openAiApiCredentials];
    }

}
