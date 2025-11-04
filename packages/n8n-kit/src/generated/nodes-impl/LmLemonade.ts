// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LemonadeApiCredentials } from "../credentials/LemonadeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmLemonadeNodeParameters } from "../nodes/LmLemonade";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmLemonadeProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmLemonadeNodeParameters;
    readonly lemonadeApiCredentials: Credentials<LemonadeApiCredentials>;
}

/**
 * Language Model Lemonade
 */
export class LmLemonade<L extends string, C extends IContext = never, P extends LmLemonadeProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmLemonade" as const;
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
