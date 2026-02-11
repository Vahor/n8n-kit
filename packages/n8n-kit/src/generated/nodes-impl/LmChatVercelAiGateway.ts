// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VercelAiGatewayApiCredentials } from "../credentials/VercelAiGatewayApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatVercelAiGatewayNodeParameters } from "../nodes/LmChatVercelAiGateway";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatVercelAiGatewayProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatVercelAiGatewayNodeParameters;
    readonly vercelAiGatewayApiCredentials: Credentials<VercelAiGatewayApiCredentials>;
}

/**
 * For advanced usage with an AI chain via Vercel AI Gateway
 */
export class LmChatVercelAiGateway<L extends string, C extends IContext = never, P extends LmChatVercelAiGatewayProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.vercelAiGatewayApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
