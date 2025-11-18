// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBearerAuthCredentials } from "../credentials/HttpBearerAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { HttpMultipleHeadersAuthCredentials } from "../credentials/HttpMultipleHeadersAuth.ts";
import type { McpOAuth2ApiCredentials } from "../credentials/McpOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { McpClientToolNodeParameters } from "../nodes/McpClientTool";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface McpClientToolProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: McpClientToolNodeParameters;
    readonly httpBearerAuthCredentials?: Credentials<HttpBearerAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly httpMultipleHeadersAuthCredentials?: Credentials<HttpMultipleHeadersAuthCredentials>;
    readonly mcpOAuth2ApiCredentials?: Credentials<McpOAuth2ApiCredentials>;
}

/**
 * Connect tools from an MCP Server
 */
export class McpClientTool<L extends string, C extends IContext = never, P extends McpClientToolProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.mcpClientTool" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.httpBearerAuthCredentials, this.props?.httpHeaderAuthCredentials, this.props?.httpMultipleHeadersAuthCredentials, this.props?.mcpOAuth2ApiCredentials];
    }

    public toTools(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
