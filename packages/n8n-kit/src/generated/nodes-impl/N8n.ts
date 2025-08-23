// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { N8nApiCredentials } from "../credentials/N8nApi.ts";
import type { Credentials } from "../../credentials";
import type { N8nNodeParameters } from "../nodes/N8n";
import { Node, type NodeProps } from "../../nodes";

export interface N8nProps extends NodeProps, N8nNodeParameters {

    readonly n8NApiCredentials: Credentials<N8nApiCredentials>;

}

export class N8n<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.n8n" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: N8nProps) {

        super(id, props);

    }

    override getParameters() {

        const { n8NApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.n8NApiCredentials];

    }


}

