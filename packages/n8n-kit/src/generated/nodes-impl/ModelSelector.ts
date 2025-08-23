// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ModelSelectorNodeParameters } from "../nodes/ModelSelector";
import { Node, type NodeProps } from "../../nodes";

export interface ModelSelectorProps extends NodeProps {

    readonly parameters: ModelSelectorNodeParameters;

}

/**
 * Use this node to select one of the connected models to this node based on workflow data
 */
export class ModelSelector<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.modelSelector" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ModelSelectorProps) {

        super(id, props);

    }


}
