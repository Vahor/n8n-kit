// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BoxOAuth2ApiCredentials } from "../credentials/BoxOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { BoxNodeParameters } from "../nodes/Box";
import { Node, type NodeProps } from "../../nodes";

export interface BoxProps extends NodeProps, BoxNodeParameters {

    readonly boxOAuth2ApiCredentials: Credentials<BoxOAuth2ApiCredentials>;

}

export class Box<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.box" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: BoxProps) {

        super(id, props);

    }

    override getParameters() {

        const { boxOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.boxOAuth2ApiCredentials];

    }


}

