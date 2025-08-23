// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KeapOAuth2ApiCredentials } from "../credentials/KeapOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { KeapTriggerNodeParameters } from "../nodes/KeapTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface KeapTriggerProps extends NodeProps, KeapTriggerNodeParameters {

    readonly keapOAuth2ApiCredentials: Credentials<KeapOAuth2ApiCredentials>;

}

export class KeapTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.keapTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: KeapTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { keapOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.keapOAuth2ApiCredentials];

    }


}

