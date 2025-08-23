// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WiseApiCredentials } from "../credentials/WiseApi.ts";
import type { Credentials } from "../../credentials";
import type { WiseTriggerNodeParameters } from "../nodes/WiseTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface WiseTriggerProps extends NodeProps, WiseTriggerNodeParameters {

    readonly wiseApiCredentials: Credentials<WiseApiCredentials>;

}

export class WiseTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.wiseTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: WiseTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { wiseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.wiseApiCredentials];

    }


}

