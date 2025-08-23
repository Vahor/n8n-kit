// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VercelAiGatewayApiCredentials } from "../credentials/VercelAiGatewayApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatVercelAiGatewayNodeParameters } from "../nodes/LmChatVercelAiGateway";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatVercelAiGatewayProps extends NodeProps, LmChatVercelAiGatewayNodeParameters {

    readonly vercelAiGatewayApiCredentials: Credentials<VercelAiGatewayApiCredentials>;

}

export class LmChatVercelAiGateway<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatVercelAiGateway" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatVercelAiGatewayProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatVercelAiGatewayNodeParameters, "vercelAiGatewayApiCredentials"> {

        const { vercelAiGatewayApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.vercelAiGatewayApiCredentials];

    }


}
