// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GitlabApiCredentials } from "../credentials/GitlabApi.ts";
import type { GitlabOAuth2ApiCredentials } from "../credentials/GitlabOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GitlabNodeParameters } from "../nodes/Gitlab";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GitlabProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GitlabNodeParameters;
    readonly gitlabApiCredentials?: Credentials<GitlabApiCredentials>;
    readonly gitlabOAuth2ApiCredentials?: Credentials<GitlabOAuth2ApiCredentials>;
}

/**
 * Retrieve data from GitLab API
 */
export class Gitlab<L extends string, C extends IContext = never, P extends GitlabProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.gitlab" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.gitlabApiCredentials, this.props?.gitlabOAuth2ApiCredentials];
    }

}
