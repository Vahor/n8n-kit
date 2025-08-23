// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BoxOAuth2ApiCredentials } from "../credentials/BoxOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { BoxTriggerNodeParameters } from "../nodes/BoxTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface BoxTriggerProps extends NodeProps, BoxTriggerNodeParameters {

    readonly boxOAuth2ApiCredentials: Credentials<BoxOAuth2ApiCredentials>;

}

export class BoxTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.boxTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: BoxTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<BoxTriggerNodeParameters, "boxOAuth2ApiCredentials"> {

        const { boxOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.boxOAuth2ApiCredentials];

    }


}
