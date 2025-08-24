// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GitlabApiCredentials } from "../credentials/GitlabApi.ts";
import type { GitlabOAuth2ApiCredentials } from "../credentials/GitlabOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GitlabNodeParameters } from "../nodes/Gitlab";
import { Node, type NodeProps } from "../../nodes/node";

export interface GitlabProps extends NodeProps {
    readonly parameters: GitlabNodeParameters;
    readonly gitlabApiCredentials?: Credentials<GitlabApiCredentials>;
    readonly gitlabOAuth2ApiCredentials?: Credentials<GitlabOAuth2ApiCredentials>;
}

/**
 * Retrieve data from GitLab API
 */
export class Gitlab<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.gitlab" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GitlabProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.gitlabApiCredentials, this.props!.gitlabOAuth2ApiCredentials];
    }

}
