// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VercelAiGatewayApiCredentials } from "../credentials/VercelAiGatewayApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatVercelAiGatewayNodeParameters } from "../nodes/LmChatVercelAiGateway";
import { Node, type NodeProps } from "../../nodes/node";

export interface LmChatVercelAiGatewayProps extends NodeProps {
    readonly parameters: LmChatVercelAiGatewayNodeParameters;
    readonly vercelAiGatewayApiCredentials: Credentials<VercelAiGatewayApiCredentials>;
}

/**
 * For advanced usage with an AI chain via Vercel AI Gateway
 */
export class LmChatVercelAiGateway<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatVercelAiGatewayProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.vercelAiGatewayApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
