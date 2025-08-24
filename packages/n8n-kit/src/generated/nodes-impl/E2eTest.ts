// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { E2eTestNodeParameters } from "../nodes/E2eTest";
import { Node, type NodeProps } from "../../nodes/node";

export interface E2eTestProps extends NodeProps {
    readonly parameters: E2eTestNodeParameters;
}

/**
 * Dummy node used for e2e testing
 */
export class E2eTest<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.e2eTest" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: E2eTestProps) {
        super(id, props);
    }

}
