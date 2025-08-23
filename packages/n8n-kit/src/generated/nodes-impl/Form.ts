// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FormNodeParameters } from "../nodes/Form";
import { Node, type NodeProps } from "../../nodes";

export interface FormProps extends NodeProps {

    readonly parameters: FormNodeParameters;

}

export class Form<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.form" as const;
    protected typeVersion = 2.3 as const;

    constructor(id: L, override props?: FormProps) {

        super(id, props);

    }


}
