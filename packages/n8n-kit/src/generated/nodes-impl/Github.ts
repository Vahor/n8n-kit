// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GithubApiCredentials } from "../credentials/GithubApi.ts";
import type { GithubOAuth2ApiCredentials } from "../credentials/GithubOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GithubNodeParameters } from "../nodes/Github";
import { Node, type NodeProps } from "../../nodes";

export interface GithubProps extends NodeProps, GithubNodeParameters {

    readonly githubApiCredentials?: Credentials<GithubApiCredentials>;
    readonly githubOAuth2ApiCredentials?: Credentials<GithubOAuth2ApiCredentials>;

}

export class Github<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.github" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: GithubProps) {

        super(id, props);

    }

    override getParameters() : Omit<GithubNodeParameters, "githubApiCredentials | githubOAuth2ApiCredentials"> {

        const { githubApiCredentials:_0, githubOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.githubApiCredentials, this.props.githubOAuth2ApiCredentials];

    }


}

