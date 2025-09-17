// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { E2eTestNodeParameters } from "../nodes/E2eTest";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface E2eTestProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: E2eTestNodeParameters;
}

/**
 * Dummy node used for e2e testing
 */
export class E2eTest<L extends string, C extends IContext = never, P extends E2eTestProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.e2eTest" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
