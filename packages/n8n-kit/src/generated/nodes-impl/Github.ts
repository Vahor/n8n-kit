// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GithubApiCredentials } from "../credentials/GithubApi.ts";
import type { GithubOAuth2ApiCredentials } from "../credentials/GithubOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GithubNodeParameters } from "../nodes/Github";
import { Node, type NodeProps } from "../../nodes/node";

export interface GithubProps extends NodeProps {
    readonly parameters: GithubNodeParameters;
    readonly githubApiCredentials?: Credentials<GithubApiCredentials>;
    readonly githubOAuth2ApiCredentials?: Credentials<GithubOAuth2ApiCredentials>;
}

/**
 * Consume GitHub API
 */
export class Github<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.github" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: GithubProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.githubApiCredentials, this.props!.githubOAuth2ApiCredentials];
    }

}
