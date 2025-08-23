// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AgileCrmApiCredentials } from "../credentials/AgileCrmApi.ts";
import type { Credentials } from "../../credentials";
import type { AgileCrmNodeParameters } from "../nodes/AgileCrm";
import { Node, type NodeProps } from "../../nodes";

export interface AgileCrmProps extends NodeProps, AgileCrmNodeParameters {

    readonly agileCrmApiCredentials: Credentials<AgileCrmApiCredentials>;

}

export class AgileCrm<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.agileCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AgileCrmProps) {

        super(id, props);

    }

    override getParameters() : Omit<AgileCrmNodeParameters, "agileCrmApiCredentials"> {

        const { agileCrmApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.agileCrmApiCredentials];

    }


}

