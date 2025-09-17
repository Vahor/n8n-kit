// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GithubApiCredentials } from "../credentials/GithubApi.ts";
import type { GithubOAuth2ApiCredentials } from "../credentials/GithubOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GithubTriggerNodeParameters } from "../nodes/GithubTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GithubTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GithubTriggerNodeParameters;
    readonly githubApiCredentials?: Credentials<GithubApiCredentials>;
    readonly githubOAuth2ApiCredentials?: Credentials<GithubOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Github events occur
 */
export class GithubTrigger<L extends string, C extends IContext = never, P extends GithubTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.githubTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.githubApiCredentials, this.props?.githubOAuth2ApiCredentials];
    }

}
