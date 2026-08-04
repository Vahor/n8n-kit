// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { E2eTestPollingTriggerNodeParameters } from "../nodes/E2eTestPollingTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface E2eTestPollingTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: E2eTestPollingTriggerNodeParameters;
}

/**
 * Dummy polling trigger for e2e testing
 */
export class E2eTestPollingTrigger<L extends string, C extends IContext = never, P extends E2eTestPollingTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.e2eTestPollingTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
