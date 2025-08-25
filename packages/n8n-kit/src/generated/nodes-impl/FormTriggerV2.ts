// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FormTriggerV2NodeParameters } from "../nodes/FormTriggerV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface FormTriggerV2Props extends NodeProps {
    readonly parameters: FormTriggerV2NodeParameters;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
}

/**
 * Generate webforms in n8n and pass their responses to the workflow
 */
export class FormTriggerV2<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.formTrigger" as const;
    protected typeVersion = 2.3 as const;

    constructor(id: L, override props?: FormTriggerV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.httpBasicAuthCredentials];
    }

}
