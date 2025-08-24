// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RaindropOAuth2ApiCredentials } from "../credentials/RaindropOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { RaindropNodeParameters } from "../nodes/Raindrop";
import { Node, type NodeProps } from "../../nodes/node";

export interface RaindropProps extends NodeProps {
    readonly parameters: RaindropNodeParameters;
    readonly raindropOAuth2ApiCredentials: Credentials<RaindropOAuth2ApiCredentials>;
}

/**
 * Consume the Raindrop API
 */
export class Raindrop<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.raindrop" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: RaindropProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.raindropOAuth2ApiCredentials];
    }

}
