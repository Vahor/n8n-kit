// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ExecuteCommandNodeParameters } from "../nodes/ExecuteCommand";
import { Node, type NodeProps } from "../../nodes";

export interface ExecuteCommandProps extends NodeProps, ExecuteCommandNodeParameters {


}

export class ExecuteCommand<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.executeCommand" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ExecuteCommandProps) {

        super(id, props);

    }

    override getParameters() : ExecuteCommandNodeParameters {

        return this.props ?? {};

    }


}

