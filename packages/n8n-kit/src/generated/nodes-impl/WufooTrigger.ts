// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WufooApiCredentials } from "../credentials/WufooApi.ts";
import type { Credentials } from "../../credentials";
import type { WufooTriggerNodeParameters } from "../nodes/WufooTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface WufooTriggerProps extends NodeProps, WufooTriggerNodeParameters {

    readonly wufooApiCredentials: Credentials<WufooApiCredentials>;

}

export class WufooTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.wufooTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: WufooTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { wufooApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.wufooApiCredentials];

    }


}

