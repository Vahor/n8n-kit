// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FormstackApiCredentials } from "../credentials/FormstackApi.ts";
import type { FormstackOAuth2ApiCredentials } from "../credentials/FormstackOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { FormstackTriggerNodeParameters } from "../nodes/FormstackTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface FormstackTriggerProps extends NodeProps, FormstackTriggerNodeParameters {

    readonly formstackApiCredentials?: Credentials<FormstackApiCredentials>;
    readonly formstackOAuth2ApiCredentials?: Credentials<FormstackOAuth2ApiCredentials>;

}

export class FormstackTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.formstackTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: FormstackTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<FormstackTriggerNodeParameters, "formstackApiCredentials | formstackOAuth2ApiCredentials"> {

        const { formstackApiCredentials:_0, formstackOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.formstackApiCredentials, this.props.formstackOAuth2ApiCredentials];

    }


}
