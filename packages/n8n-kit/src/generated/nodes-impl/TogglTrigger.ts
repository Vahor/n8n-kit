// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TogglApiCredentials } from "../credentials/TogglApi.ts";
import type { Credentials } from "../../credentials";
import type { TogglTriggerNodeParameters } from "../nodes/TogglTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TogglTriggerProps extends NodeProps, TogglTriggerNodeParameters {

    readonly togglApiCredentials: Credentials<TogglApiCredentials>;

}

export class TogglTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.togglTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: TogglTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { togglApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.togglApiCredentials];

    }


}

