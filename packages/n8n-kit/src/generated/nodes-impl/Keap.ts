// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KeapOAuth2ApiCredentials } from "../credentials/KeapOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { KeapNodeParameters } from "../nodes/Keap";
import { Node, type NodeProps } from "../../nodes";

export interface KeapProps extends NodeProps, KeapNodeParameters {

    readonly keapOAuth2ApiCredentials: Credentials<KeapOAuth2ApiCredentials>;

}

export class Keap<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.keap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: KeapProps) {

        super(id, props);

    }

    override getParameters() : Omit<KeapNodeParameters, "keapOAuth2ApiCredentials"> {

        const { keapOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.keapOAuth2ApiCredentials];

    }


}
