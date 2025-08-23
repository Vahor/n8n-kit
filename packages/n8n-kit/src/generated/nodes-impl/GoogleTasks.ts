// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleTasksOAuth2ApiCredentials } from "../credentials/GoogleTasksOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleTasksNodeParameters } from "../nodes/GoogleTasks";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleTasksProps extends NodeProps, GoogleTasksNodeParameters {

    readonly googleTasksOAuth2ApiCredentials: Credentials<GoogleTasksOAuth2ApiCredentials>;

}

export class GoogleTasks<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleTasks" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GoogleTasksProps) {

        super(id, props);

    }

    override getParameters() {

        const { googleTasksOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleTasksOAuth2ApiCredentials];

    }


}

