// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ModelSelectorAINodeParameters } from "../nodes/ModelSelectorAI";
import { Node, type NodeProps } from "../../nodes";

export interface ModelSelectorAIProps extends NodeProps, ModelSelectorAINodeParameters {


}

export class ModelSelectorAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.modelSelector" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ModelSelectorAIProps) {

        super(id, props);

    }

    override getParameters() : ModelSelectorAINodeParameters {

        return this.props ?? {};

    }


}

