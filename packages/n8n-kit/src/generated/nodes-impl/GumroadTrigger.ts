// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GumroadApiCredentials } from "../credentials/GumroadApi.ts";
import type { Credentials } from "../../credentials";
import type { GumroadTriggerNodeParameters } from "../nodes/GumroadTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface GumroadTriggerProps extends NodeProps, GumroadTriggerNodeParameters {

    readonly gumroadApiCredentials: Credentials<GumroadApiCredentials>;

}

export class GumroadTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.gumroadTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GumroadTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { gumroadApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.gumroadApiCredentials];

    }


}

