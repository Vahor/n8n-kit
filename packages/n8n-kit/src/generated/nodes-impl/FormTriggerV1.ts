// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FormTriggerV1NodeParameters } from "../nodes/FormTriggerV1";
import { Node, type NodeProps } from "../../nodes";

export interface FormTriggerV1Props extends NodeProps {
    readonly parameters: FormTriggerV1NodeParameters;
}

/**
 * Generate webforms in n8n and pass their responses to the workflow
 */
export class FormTriggerV1<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.formTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: FormTriggerV1Props) {
        super(id, props);
    }

}
