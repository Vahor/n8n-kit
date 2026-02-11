// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AzureOpenAiApiCredentials } from "../credentials/AzureOpenAiApi.ts";
import type { AzureEntraCognitiveServicesOAuth2ApiCredentials } from "../credentials/AzureEntraCognitiveServicesOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatAzureOpenAiNodeParameters } from "../nodes/LmChatAzureOpenAi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatAzureOpenAiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatAzureOpenAiNodeParameters;
    readonly azureOpenAiApiCredentials?: Credentials<AzureOpenAiApiCredentials>;
    readonly azureEntraCognitiveServicesOAuth2ApiCredentials?: Credentials<AzureEntraCognitiveServicesOAuth2ApiCredentials>;
}

/**
 * For advanced usage with an AI chain
 */
export class LmChatAzureOpenAi<L extends string, C extends IContext = never, P extends LmChatAzureOpenAiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatAzureOpenAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.azureOpenAiApiCredentials, this.props?.azureEntraCognitiveServicesOAuth2ApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
