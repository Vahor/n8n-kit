// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GitPasswordCredentials } from "../credentials/GitPassword.ts";
import type { Credentials } from "../../credentials";
import type { GitNodeParameters } from "../nodes/Git";
import { Node, type NodeProps } from "../../nodes";

export interface GitProps extends NodeProps, GitNodeParameters {

    readonly gitPasswordCredentials?: Credentials<GitPasswordCredentials>;

}

export class Git<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.git" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GitProps) {

        super(id, props);

    }

    override getParameters() : Omit<GitNodeParameters, "gitPasswordCredentials"> {

        const { gitPasswordCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.gitPasswordCredentials];

    }


}

