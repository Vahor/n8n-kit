// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { N8nTrainingCustomerMessengerNodeParameters } from "../nodes/N8nTrainingCustomerMessenger";
import { Node, type NodeProps } from "../../nodes/node";

export interface N8nTrainingCustomerMessengerProps extends NodeProps {
    readonly parameters: N8nTrainingCustomerMessengerNodeParameters;
}

/**
 * Dummy node used for n8n training
 */
export class N8nTrainingCustomerMessenger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.n8nTrainingCustomerMessenger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: N8nTrainingCustomerMessengerProps) {
        super(id, props);
    }

}
