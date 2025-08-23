// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JotFormApiCredentials } from "../credentials/JotFormApi.ts";
import type { Credentials } from "../../credentials";
import type { JotFormTriggerNodeParameters } from "../nodes/JotFormTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface JotFormTriggerProps extends NodeProps, JotFormTriggerNodeParameters {

    readonly jotFormApiCredentials: Credentials<JotFormApiCredentials>;

}

export class JotFormTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.jotFormTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: JotFormTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<JotFormTriggerNodeParameters, "jotFormApiCredentials"> {

        const { jotFormApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.jotFormApiCredentials];

    }


}
