// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GithubApiCredentials } from "../credentials/GithubApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { DocumentGithubLoaderNodeParameters } from "../nodes/DocumentGithubLoader";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DocumentGithubLoaderProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DocumentGithubLoaderNodeParameters;
    readonly githubApiCredentials: Credentials<GithubApiCredentials>;
}

/**
 * Use GitHub data as input to this chain
 */
export class DocumentGithubLoader<L extends string, C extends IContext = never, P extends DocumentGithubLoaderProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.documentGithubLoader" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props.githubApiCredentials];
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

    public toAiDocument(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_document" });
        return this;
    }

}
