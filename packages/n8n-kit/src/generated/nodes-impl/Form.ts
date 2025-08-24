// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { FormNodeParameters } from "../nodes/Form";
import { Node, type NodeProps } from "../../nodes/node";

export interface FormProps extends NodeProps {
    readonly parameters: FormNodeParameters;
}

/**
 * Generate webforms in n8n and pass their responses to the workflow
 */
export class Form<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.form" as const;
    protected typeVersion = 2.3 as const;

    constructor(id: L, override props?: FormProps) {
        super(id, props);
    }

}
