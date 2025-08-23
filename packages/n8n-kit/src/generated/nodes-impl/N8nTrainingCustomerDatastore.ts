// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { N8nTrainingCustomerDatastoreNodeParameters } from "../nodes/N8nTrainingCustomerDatastore";
import { Node, type NodeProps } from "../../nodes";

export interface N8nTrainingCustomerDatastoreProps extends NodeProps, N8nTrainingCustomerDatastoreNodeParameters {


}

export class N8nTrainingCustomerDatastore<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.n8nTrainingCustomerDatastore" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: N8nTrainingCustomerDatastoreProps) {

        super(id, props);

    }

    override getParameters() : N8nTrainingCustomerDatastoreNodeParameters {

        return this.props ?? {};

    }


}
