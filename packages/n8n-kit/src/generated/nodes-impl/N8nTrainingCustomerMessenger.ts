// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { N8nTrainingCustomerMessengerNodeParameters } from "../nodes/N8nTrainingCustomerMessenger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface N8nTrainingCustomerMessengerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: N8nTrainingCustomerMessengerNodeParameters;
}

/**
 * Dummy node used for n8n training
 */
export class N8nTrainingCustomerMessenger<L extends string, C extends IContext = never, P extends N8nTrainingCustomerMessengerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.n8nTrainingCustomerMessenger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
