// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { N8nTrainingCustomerDatastoreNodeParameters } from "../nodes/N8nTrainingCustomerDatastore";
import { Node, type NodeProps } from "../../nodes/node";

export interface N8nTrainingCustomerDatastoreProps extends NodeProps {
    readonly parameters: N8nTrainingCustomerDatastoreNodeParameters;
}

/**
 * Dummy node used for n8n training
 */
export class N8nTrainingCustomerDatastore<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.n8nTrainingCustomerDatastore" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: N8nTrainingCustomerDatastoreProps) {
        super(id, props);
    }

}
