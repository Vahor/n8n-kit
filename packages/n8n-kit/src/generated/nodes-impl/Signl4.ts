// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Signl4ApiCredentials } from "../credentials/Signl4Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { Signl4NodeParameters } from "../nodes/Signl4";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface Signl4Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: Signl4NodeParameters;
    readonly signl4ApiCredentials: Credentials<Signl4ApiCredentials>;
}

/**
 * Consume SIGNL4 API
 */
export class Signl4<L extends string, C extends IContext = never, P extends Signl4Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.signl4" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.signl4ApiCredentials];
    }

}
