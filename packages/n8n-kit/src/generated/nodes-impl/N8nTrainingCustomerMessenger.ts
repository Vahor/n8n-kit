// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { N8nTrainingCustomerMessengerNodeParameters } from "../nodes/N8nTrainingCustomerMessenger";
import { Node, type NodeProps } from "../../nodes";

export interface N8nTrainingCustomerMessengerProps extends NodeProps, N8nTrainingCustomerMessengerNodeParameters {


}

export class N8nTrainingCustomerMessenger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.n8nTrainingCustomerMessenger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: N8nTrainingCustomerMessengerProps) {

        super(id, props);

    }

    override getParameters() : N8nTrainingCustomerMessengerNodeParameters {

        return this.props ?? {};

    }


}

