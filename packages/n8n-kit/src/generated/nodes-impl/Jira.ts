// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JiraSoftwareCloudApiCredentials } from "../credentials/JiraSoftwareCloudApi.ts";
import type { JiraSoftwareServerApiCredentials } from "../credentials/JiraSoftwareServerApi.ts";
import type { JiraSoftwareServerPatApiCredentials } from "../credentials/JiraSoftwareServerPatApi.ts";
import type { Credentials } from "../../credentials";
import type { JiraNodeParameters } from "../nodes/Jira";
import { Node, type NodeProps } from "../../nodes";

export interface JiraProps extends NodeProps {

    readonly parameters: JiraNodeParameters;
    readonly jiraSoftwareCloudApiCredentials?: Credentials<JiraSoftwareCloudApiCredentials>;
    readonly jiraSoftwareServerApiCredentials?: Credentials<JiraSoftwareServerApiCredentials>;
    readonly jiraSoftwareServerPatApiCredentials?: Credentials<JiraSoftwareServerPatApiCredentials>;

}

export class Jira<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.jira" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: JiraProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.jiraSoftwareCloudApiCredentials, this.props!.jiraSoftwareServerApiCredentials, this.props!.jiraSoftwareServerPatApiCredentials];

    }


}
