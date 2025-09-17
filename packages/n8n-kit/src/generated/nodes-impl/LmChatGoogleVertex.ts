// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatGoogleVertexNodeParameters } from "../nodes/LmChatGoogleVertex";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatGoogleVertexProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatGoogleVertexNodeParameters;
    readonly googleApiCredentials: Credentials<GoogleApiCredentials>;
}

/**
 * Chat Model Google Vertex
 */
export class LmChatGoogleVertex<L extends string, C extends IContext = never, P extends LmChatGoogleVertexProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatGoogleVertex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googleApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
