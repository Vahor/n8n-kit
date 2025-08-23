// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Sms77ApiCredentials } from "../credentials/Sms77Api.ts";
import type { Credentials } from "../../credentials";
import type { Sms77NodeParameters } from "../nodes/Sms77";
import { Node, type NodeProps } from "../../nodes";

export interface Sms77Props extends NodeProps, Sms77NodeParameters {

    readonly sms77ApiCredentials: Credentials<Sms77ApiCredentials>;

}

export class Sms77<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.sms77" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: Sms77Props) {

        super(id, props);

    }

    override getParameters() {

        const { sms77ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.sms77ApiCredentials];

    }


}

