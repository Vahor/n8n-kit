// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VercelAiGatewayApiCredentials } from "../credentials/VercelAiGatewayApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatVercelAiGatewayAINodeParameters } from "../nodes/LmChatVercelAiGatewayAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatVercelAiGatewayAIProps extends NodeProps, LmChatVercelAiGatewayAINodeParameters {

    readonly vercelAiGatewayApiCredentials: Credentials<VercelAiGatewayApiCredentials>;

}

export class LmChatVercelAiGatewayAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatVercelAiGateway" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatVercelAiGatewayAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatVercelAiGatewayAINodeParameters, "vercelAiGatewayApiCredentials"> {

        const { vercelAiGatewayApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.vercelAiGatewayApiCredentials];

    }


}

