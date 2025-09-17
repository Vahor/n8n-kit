// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PaddleApiCredentials } from "../credentials/PaddleApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PaddleNodeParameters } from "../nodes/Paddle";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PaddleProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PaddleNodeParameters;
    readonly paddleApiCredentials: Credentials<PaddleApiCredentials>;
}

/**
 * Consume Paddle API
 */
export class Paddle<L extends string, C extends IContext = never, P extends PaddleProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.paddle" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.paddleApiCredentials];
    }

}
