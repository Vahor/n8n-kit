// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LemonadeApiCredentials } from "../credentials/LemonadeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatLemonadeNodeParameters } from "../nodes/LmChatLemonade";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatLemonadeProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatLemonadeNodeParameters;
    readonly lemonadeApiCredentials: Credentials<LemonadeApiCredentials>;
}

/**
 * Language Model Lemonade Chat
 */
export class LmChatLemonade<L extends string, C extends IContext = never, P extends LmChatLemonadeProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatLemonade" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.lemonadeApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
