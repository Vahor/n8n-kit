// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ModelSelectorNodeParameters } from "../nodes/ModelSelector";
import { Node, type NodeProps } from "../../nodes";

export interface ModelSelectorProps extends NodeProps, ModelSelectorNodeParameters {


}

export class ModelSelector<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.modelSelector" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ModelSelectorProps) {

        super(id, props);

    }

    override getParameters() : ModelSelectorNodeParameters {

        return this.props ?? {};

    }


}
