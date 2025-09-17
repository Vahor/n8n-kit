// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AffinityApiCredentials } from "../credentials/AffinityApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AffinityNodeParameters } from "../nodes/Affinity";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AffinityProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AffinityNodeParameters;
    readonly affinityApiCredentials: Credentials<AffinityApiCredentials>;
}

/**
 * Consume Affinity API
 */
export class Affinity<L extends string, C extends IContext = never, P extends AffinityProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.affinity" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.affinityApiCredentials];
    }

}
