// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FormIoApiCredentials } from "../credentials/FormIoApi.ts";
import type { Credentials } from "../../credentials";
import type { FormIoTriggerNodeParameters } from "../nodes/FormIoTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface FormIoTriggerProps extends NodeProps, FormIoTriggerNodeParameters {

    readonly formIoApiCredentials: Credentials<FormIoApiCredentials>;

}

export class FormIoTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.formIoTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: FormIoTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<FormIoTriggerNodeParameters, "formIoApiCredentials"> {

        const { formIoApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.formIoApiCredentials];

    }


}
