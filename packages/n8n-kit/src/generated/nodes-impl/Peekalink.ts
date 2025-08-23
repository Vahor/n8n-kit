// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PeekalinkApiCredentials } from "../credentials/PeekalinkApi.ts";
import type { Credentials } from "../../credentials";
import type { PeekalinkNodeParameters } from "../nodes/Peekalink";
import { Node, type NodeProps } from "../../nodes";

export interface PeekalinkProps extends NodeProps, PeekalinkNodeParameters {

    readonly peekalinkApiCredentials: Credentials<PeekalinkApiCredentials>;

}

export class Peekalink<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.peekalink" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: PeekalinkProps) {

        super(id, props);

    }

    override getParameters() : Omit<PeekalinkNodeParameters, "peekalinkApiCredentials"> {

        const { peekalinkApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.peekalinkApiCredentials];

    }


}

