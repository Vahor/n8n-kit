// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GithubApiCredentials } from "../credentials/GithubApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { DocumentGithubLoaderNodeParameters } from "../nodes/DocumentGithubLoader";
import { Node, type NodeProps } from "../../nodes";

export interface DocumentGithubLoaderProps extends NodeProps {
    readonly parameters: DocumentGithubLoaderNodeParameters;
    readonly githubApiCredentials: Credentials<GithubApiCredentials>;
}

/**
 * Use GitHub data as input to this chain
 */
export class DocumentGithubLoader<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.documentGithubLoader" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: DocumentGithubLoaderProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.githubApiCredentials];
    }

    public aiDocument(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_document" });
        return this;
    }

}
