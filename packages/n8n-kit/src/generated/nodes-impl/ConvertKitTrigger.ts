// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ConvertKitApiCredentials } from "../credentials/ConvertKitApi.ts";
import type { Credentials } from "../../credentials";
import type { ConvertKitTriggerNodeParameters } from "../nodes/ConvertKitTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ConvertKitTriggerProps extends NodeProps, ConvertKitTriggerNodeParameters {

    readonly convertKitApiCredentials: Credentials<ConvertKitApiCredentials>;

}

export class ConvertKitTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.convertKitTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ConvertKitTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<ConvertKitTriggerNodeParameters, "convertKitApiCredentials"> {

        const { convertKitApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.convertKitApiCredentials];

    }


}

