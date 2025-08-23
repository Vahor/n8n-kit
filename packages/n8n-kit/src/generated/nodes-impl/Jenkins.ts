// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JenkinsApiCredentials } from "../credentials/JenkinsApi.ts";
import type { Credentials } from "../../credentials";
import type { JenkinsNodeParameters } from "../nodes/Jenkins";
import { Node, type NodeProps } from "../../nodes";

export interface JenkinsProps extends NodeProps, JenkinsNodeParameters {

    readonly jenkinsApiCredentials: Credentials<JenkinsApiCredentials>;

}

export class Jenkins<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.jenkins" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: JenkinsProps) {

        super(id, props);

    }

    override getParameters() : Omit<JenkinsNodeParameters, "jenkinsApiCredentials"> {

        const { jenkinsApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.jenkinsApiCredentials];

    }


}
