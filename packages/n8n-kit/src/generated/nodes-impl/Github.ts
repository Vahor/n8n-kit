// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GithubApiCredentials } from "../credentials/GithubApi.ts";
import type { GithubOAuth2ApiCredentials } from "../credentials/GithubOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GithubNodeParameters } from "../nodes/Github";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GithubProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GithubNodeParameters;
    readonly githubApiCredentials?: Credentials<GithubApiCredentials>;
    readonly githubOAuth2ApiCredentials?: Credentials<GithubOAuth2ApiCredentials>;
}

/**
 * Consume GitHub API
 */
export class Github<L extends string, C extends IContext = never, P extends GithubProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.github" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.githubApiCredentials, this.props?.githubOAuth2ApiCredentials];
    }

}
