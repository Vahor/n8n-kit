// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBearerAuthCredentials } from "../credentials/HttpBearerAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { Credentials } from "../../credentials";
import type { McpClientToolAINodeParameters } from "../nodes/McpClientToolAI";
import { Node, type NodeProps } from "../../nodes";

export interface McpClientToolAIProps extends NodeProps, McpClientToolAINodeParameters {

    readonly httpBearerAuthCredentials?: Credentials<HttpBearerAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;

}

export class McpClientToolAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mcpClientTool" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: McpClientToolAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<McpClientToolAINodeParameters, "httpBearerAuthCredentials | httpHeaderAuthCredentials"> {

        const { httpBearerAuthCredentials:_0, httpHeaderAuthCredentials:_1, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.httpBearerAuthCredentials, this.props?.httpHeaderAuthCredentials];

    }


}
