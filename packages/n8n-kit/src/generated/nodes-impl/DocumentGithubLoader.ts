// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GithubApiCredentials } from "../credentials/GithubApi.ts";
import type { Credentials } from "../../credentials";
import type { DocumentGithubLoaderNodeParameters } from "../nodes/DocumentGithubLoader";
import { Node, type NodeProps } from "../../nodes";

export interface DocumentGithubLoaderProps extends NodeProps, DocumentGithubLoaderNodeParameters {

    readonly githubApiCredentials: Credentials<GithubApiCredentials>;

}

export class DocumentGithubLoader<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.documentGithubLoader" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props: DocumentGithubLoaderProps) {

        super(id, props);

    }

    override getParameters() : Omit<DocumentGithubLoaderNodeParameters, "githubApiCredentials"> {

        const { githubApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.githubApiCredentials];

    }


}
