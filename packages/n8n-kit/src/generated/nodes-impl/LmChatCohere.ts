// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { LmChatCohereNodeParameters } from "../nodes/LmChatCohere";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatCohereProps extends NodeProps {
    readonly parameters: LmChatCohereNodeParameters;
    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;
}

/**
 * For advanced usage with an AI chain
 */
export class LmChatCohere<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatCohereProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.cohereApiCredentials];
    }

    public aiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
