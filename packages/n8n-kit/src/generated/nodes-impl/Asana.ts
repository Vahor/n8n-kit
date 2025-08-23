// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AsanaApiCredentials } from "../credentials/AsanaApi.ts";
import type { AsanaOAuth2ApiCredentials } from "../credentials/AsanaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { AsanaNodeParameters } from "../nodes/Asana";
import { Node, type NodeProps } from "../../nodes";

export interface AsanaProps extends NodeProps, AsanaNodeParameters {

    readonly asanaApiCredentials?: Credentials<AsanaApiCredentials>;
    readonly asanaOAuth2ApiCredentials?: Credentials<AsanaOAuth2ApiCredentials>;

}

export class Asana<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.asana" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: AsanaProps) {

        super(id, props);

    }

    override getParameters() : Omit<AsanaNodeParameters, "asanaApiCredentials | asanaOAuth2ApiCredentials"> {

        const { asanaApiCredentials:_0, asanaOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.asanaApiCredentials, this.props.asanaOAuth2ApiCredentials];

    }


}

