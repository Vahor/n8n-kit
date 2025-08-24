// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GitPasswordCredentials } from "../credentials/GitPassword.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GitNodeParameters } from "../nodes/Git";
import { Node, type NodeProps } from "../../nodes/node";

export interface GitProps extends NodeProps {
    readonly parameters: GitNodeParameters;
    readonly gitPasswordCredentials?: Credentials<GitPasswordCredentials>;
}

/**
 * Control git.
 */
export class Git<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.git" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GitProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.gitPasswordCredentials];
    }

}
