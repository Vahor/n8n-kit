// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FreshserviceApiCredentials } from "../credentials/FreshserviceApi.ts";
import type { Credentials } from "../../credentials";
import type { FreshserviceNodeParameters } from "../nodes/Freshservice";
import { Node, type NodeProps } from "../../nodes";

export interface FreshserviceProps extends NodeProps, FreshserviceNodeParameters {

    readonly freshserviceApiCredentials: Credentials<FreshserviceApiCredentials>;

}

export class Freshservice<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.freshservice" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: FreshserviceProps) {

        super(id, props);

    }

    override getParameters() : Omit<FreshserviceNodeParameters, "freshserviceApiCredentials"> {

        const { freshserviceApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.freshserviceApiCredentials];

    }


}

