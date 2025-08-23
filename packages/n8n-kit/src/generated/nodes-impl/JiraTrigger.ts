// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JiraSoftwareCloudApiCredentials } from "../credentials/JiraSoftwareCloudApi.ts";
import type { JiraSoftwareServerApiCredentials } from "../credentials/JiraSoftwareServerApi.ts";
import type { JiraSoftwareServerPatApiCredentials } from "../credentials/JiraSoftwareServerPatApi.ts";
import type { HttpQueryAuthCredentials } from "../credentials/HttpQueryAuth.ts";
import type { Credentials } from "../../credentials";
import type { JiraTriggerNodeParameters } from "../nodes/JiraTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface JiraTriggerProps extends NodeProps, JiraTriggerNodeParameters {

    readonly jiraSoftwareCloudApiCredentials?: Credentials<JiraSoftwareCloudApiCredentials>;
    readonly jiraSoftwareServerApiCredentials?: Credentials<JiraSoftwareServerApiCredentials>;
    readonly jiraSoftwareServerPatApiCredentials?: Credentials<JiraSoftwareServerPatApiCredentials>;
    readonly httpQueryAuthCredentials?: Credentials<HttpQueryAuthCredentials>;

}

export class JiraTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.jiraTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: JiraTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { jiraSoftwareCloudApiCredentials:_0, jiraSoftwareServerApiCredentials:_1, jiraSoftwareServerPatApiCredentials:_2, httpQueryAuthCredentials:_3, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.jiraSoftwareCloudApiCredentials, this.props.jiraSoftwareServerApiCredentials, this.props.jiraSoftwareServerPatApiCredentials, this.props.httpQueryAuthCredentials];

    }


}

