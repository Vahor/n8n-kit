// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { E2eTestNodeParameters } from "../nodes/E2eTest";
import { Node, type NodeProps } from "../../nodes";

export interface E2eTestProps extends NodeProps, E2eTestNodeParameters {


}

export class E2eTest<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.e2eTest" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: E2eTestProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

