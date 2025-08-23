// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PaddleApiCredentials } from "../credentials/PaddleApi.ts";
import type { Credentials } from "../../credentials";
import type { PaddleNodeParameters } from "../nodes/Paddle";
import { Node, type NodeProps } from "../../nodes";

export interface PaddleProps extends NodeProps {

    readonly parameters: PaddleNodeParameters;
    readonly paddleApiCredentials: Credentials<PaddleApiCredentials>;

}

/**
 * Consume Paddle API
 */
export class Paddle<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.paddle" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PaddleProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.paddleApiCredentials];

    }


}
