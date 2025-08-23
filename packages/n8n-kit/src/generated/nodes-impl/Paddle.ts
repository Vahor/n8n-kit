// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PaddleApiCredentials } from "../credentials/PaddleApi.ts";
import type { Credentials } from "../../credentials";
import type { PaddleNodeParameters } from "../nodes/Paddle";
import { Node, type NodeProps } from "../../nodes";

export interface PaddleProps extends NodeProps, PaddleNodeParameters {

    readonly paddleApiCredentials: Credentials<PaddleApiCredentials>;

}

export class Paddle<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.paddle" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: PaddleProps) {

        super(id, props);

    }

    override getParameters() : Omit<PaddleNodeParameters, "paddleApiCredentials"> {

        const { paddleApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.paddleApiCredentials];

    }


}
