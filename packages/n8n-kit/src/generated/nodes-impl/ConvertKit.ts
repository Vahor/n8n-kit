// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ConvertKitApiCredentials } from "../credentials/ConvertKitApi.ts";
import type { Credentials } from "../../credentials";
import type { ConvertKitNodeParameters } from "../nodes/ConvertKit";
import { Node, type NodeProps } from "../../nodes";

export interface ConvertKitProps extends NodeProps, ConvertKitNodeParameters {

    readonly convertKitApiCredentials: Credentials<ConvertKitApiCredentials>;

}

export class ConvertKit<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.convertKit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ConvertKitProps) {

        super(id, props);

    }

    override getParameters() : Omit<ConvertKitNodeParameters, "convertKitApiCredentials"> {

        const { convertKitApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.convertKitApiCredentials];

    }


}

