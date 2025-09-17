// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CircleCiApiCredentials } from "../credentials/CircleCiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CircleCiNodeParameters } from "../nodes/CircleCi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CircleCiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CircleCiNodeParameters;
    readonly circleCiApiCredentials: Credentials<CircleCiApiCredentials>;
}

/**
 * Consume CircleCI API
 */
export class CircleCi<L extends string, C extends IContext = never, P extends CircleCiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.circleCi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.circleCiApiCredentials];
    }

}
