// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RaindropOAuth2ApiCredentials } from "../credentials/RaindropOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { RaindropNodeParameters } from "../nodes/Raindrop";
import { Node, type NodeProps } from "../../nodes";

export interface RaindropProps extends NodeProps, RaindropNodeParameters {

    readonly raindropOAuth2ApiCredentials: Credentials<RaindropOAuth2ApiCredentials>;

}

export class Raindrop<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.raindrop" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: RaindropProps) {

        super(id, props);

    }

    override getParameters() : Omit<RaindropNodeParameters, "raindropOAuth2ApiCredentials"> {

        const { raindropOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.raindropOAuth2ApiCredentials];

    }


}

