// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AlibabaCloudApiCredentials } from "../credentials/AlibabaCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatAlibabaCloudNodeParameters } from "../nodes/LmChatAlibabaCloud";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatAlibabaCloudProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatAlibabaCloudNodeParameters;
    readonly alibabaCloudApiCredentials: Credentials<AlibabaCloudApiCredentials>;
}

/**
 * For advanced usage with an AI chain
 */
export class LmChatAlibabaCloud<L extends string, C extends IContext = never, P extends LmChatAlibabaCloudProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatAlibabaCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.alibabaCloudApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
