// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ErrorTriggerNodeParameters } from "../nodes/ErrorTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ErrorTriggerProps extends NodeProps, ErrorTriggerNodeParameters {


}

export class ErrorTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.errorTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ErrorTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

