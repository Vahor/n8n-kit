// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { FormTriggerV1NodeParameters } from "../nodes/FormTriggerV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FormTriggerV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FormTriggerV1NodeParameters;
}

/**
 * Generate webforms in n8n and pass their responses to the workflow
 */
export class FormTriggerV1<L extends string, C extends IContext = never, P extends FormTriggerV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.formTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
