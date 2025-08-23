// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SalesmateApiCredentials } from "../credentials/SalesmateApi.ts";
import type { Credentials } from "../../credentials";
import type { SalesmateNodeParameters } from "../nodes/Salesmate";
import { Node, type NodeProps } from "../../nodes";

export interface SalesmateProps extends NodeProps, SalesmateNodeParameters {

    readonly salesmateApiCredentials: Credentials<SalesmateApiCredentials>;

}

export class Salesmate<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.salesmate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SalesmateProps) {

        super(id, props);

    }

    override getParameters() {

        const { salesmateApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.salesmateApiCredentials];

    }


}

