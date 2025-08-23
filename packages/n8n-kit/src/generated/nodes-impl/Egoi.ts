// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EgoiApiCredentials } from "../credentials/EgoiApi.ts";
import type { Credentials } from "../../credentials";
import type { EgoiNodeParameters } from "../nodes/Egoi";
import { Node, type NodeProps } from "../../nodes";

export interface EgoiProps extends NodeProps, EgoiNodeParameters {

    readonly egoiApiCredentials: Credentials<EgoiApiCredentials>;

}

export class Egoi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.egoi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: EgoiProps) {

        super(id, props);

    }

    override getParameters() {

        const { egoiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.egoiApiCredentials];

    }


}

