// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BoxOAuth2ApiCredentials } from "../credentials/BoxOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { BoxNodeParameters } from "../nodes/Box";
import { Node, type NodeProps } from "../../nodes";

export interface BoxProps extends NodeProps {

    readonly parameters: BoxNodeParameters;
    readonly boxOAuth2ApiCredentials: Credentials<BoxOAuth2ApiCredentials>;

}

/**
 * Consume Box API
 */
export class Box<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.box" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: BoxProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.boxOAuth2ApiCredentials];

    }


}
