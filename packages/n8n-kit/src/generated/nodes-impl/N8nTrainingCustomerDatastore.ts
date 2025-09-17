// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { N8nTrainingCustomerDatastoreNodeParameters } from "../nodes/N8nTrainingCustomerDatastore";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface N8nTrainingCustomerDatastoreProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: N8nTrainingCustomerDatastoreNodeParameters;
}

/**
 * Dummy node used for n8n training
 */
export class N8nTrainingCustomerDatastore<L extends string, C extends IContext = never, P extends N8nTrainingCustomerDatastoreProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.n8nTrainingCustomerDatastore" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
