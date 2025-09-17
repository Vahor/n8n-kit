// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MistralCloudApiCredentials } from "../credentials/MistralCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatMistralCloudNodeParameters } from "../nodes/LmChatMistralCloud";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatMistralCloudProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatMistralCloudNodeParameters;
    readonly mistralCloudApiCredentials: Credentials<MistralCloudApiCredentials>;
}

/**
 * For advanced usage with an AI chain
 */
export class LmChatMistralCloud<L extends string, C extends IContext = never, P extends LmChatMistralCloudProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatMistralCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mistralCloudApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
