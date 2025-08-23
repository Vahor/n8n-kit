// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBearerAuthCredentials } from "../credentials/HttpBearerAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { Credentials } from "../../credentials";
import type { McpClientToolNodeParameters } from "../nodes/McpClientTool";
import { Node, type NodeProps } from "../../nodes";

export interface McpClientToolProps extends NodeProps {

    readonly parameters: McpClientToolNodeParameters;
    readonly httpBearerAuthCredentials?: Credentials<HttpBearerAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;

}

export class McpClientTool<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.mcpClientTool" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: McpClientToolProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.httpBearerAuthCredentials, this.props!.httpHeaderAuthCredentials];

    }


}
