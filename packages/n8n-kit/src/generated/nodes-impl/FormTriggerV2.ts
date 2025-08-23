// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { Credentials } from "../../credentials";
import type { FormTriggerV2NodeParameters } from "../nodes/FormTriggerV2";
import { Node, type NodeProps } from "../../nodes";

export interface FormTriggerV2Props extends NodeProps, FormTriggerV2NodeParameters {

    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;

}

export class FormTriggerV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.formTrigger" as const;
    protected typeVersion = 2.3 as const;

    constructor(id: L, public readonly props?: FormTriggerV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<FormTriggerV2NodeParameters, "httpBasicAuthCredentials"> {

        const { httpBasicAuthCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.httpBasicAuthCredentials];

    }


}

