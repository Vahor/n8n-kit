// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MoceanApiCredentials } from "../credentials/MoceanApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MoceanNodeParameters } from "../nodes/Mocean";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MoceanProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MoceanNodeParameters;
    readonly moceanApiCredentials: Credentials<MoceanApiCredentials>;
}

/**
 * Send SMS and voice messages via Mocean
 */
export class Mocean<L extends string, C extends IContext = never, P extends MoceanProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mocean" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.moceanApiCredentials];
    }

}
