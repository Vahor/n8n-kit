// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AiTransformNodeParameters } from "../nodes/AiTransform";
import { Node, type NodeProps } from "../../nodes";

export interface AiTransformProps extends NodeProps, AiTransformNodeParameters {


}

export class AiTransform<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.aiTransform" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: AiTransformProps) {

        super(id, props);

    }

    override getParameters() : AiTransformNodeParameters {

        return this.props ?? {};

    }


}

