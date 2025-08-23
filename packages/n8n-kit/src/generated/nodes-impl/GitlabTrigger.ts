// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GitlabApiCredentials } from "../credentials/GitlabApi.ts";
import type { GitlabOAuth2ApiCredentials } from "../credentials/GitlabOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GitlabTriggerNodeParameters } from "../nodes/GitlabTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface GitlabTriggerProps extends NodeProps {

    readonly parameters: GitlabTriggerNodeParameters;
    readonly gitlabApiCredentials?: Credentials<GitlabApiCredentials>;
    readonly gitlabOAuth2ApiCredentials?: Credentials<GitlabOAuth2ApiCredentials>;

}

export class GitlabTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.gitlabTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GitlabTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.gitlabApiCredentials, this.props!.gitlabOAuth2ApiCredentials];

    }


}
