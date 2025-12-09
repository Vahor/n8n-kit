// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { FormNodeParameters } from "../nodes/Form";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FormProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FormNodeParameters;
}

/**
 * Generate webforms in n8n and pass their responses to the workflow
 */
export class Form<L extends string, C extends IContext = never, P extends FormProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.form" as const;
    protected typeVersion = 2.4 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
