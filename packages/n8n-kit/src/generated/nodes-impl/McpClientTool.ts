// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBearerAuthCredentials } from "../credentials/HttpBearerAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { McpClientToolNodeParameters } from "../nodes/McpClientTool";
import { Node, type NodeProps } from "../../nodes/node";

export interface McpClientToolProps extends NodeProps {
    readonly parameters: McpClientToolNodeParameters;
    readonly httpBearerAuthCredentials?: Credentials<HttpBearerAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
}

/**
 * Connect tools from an MCP Server
 */
export class McpClientTool<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.mcpClientTool" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: McpClientToolProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.httpBearerAuthCredentials, this.props!.httpHeaderAuthCredentials];
    }

    public toTools(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
