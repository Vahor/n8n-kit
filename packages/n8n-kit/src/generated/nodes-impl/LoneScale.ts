// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LoneScaleApiCredentials } from "../credentials/LoneScaleApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LoneScaleNodeParameters } from "../nodes/LoneScale";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LoneScaleProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LoneScaleNodeParameters;
    readonly loneScaleApiCredentials: Credentials<LoneScaleApiCredentials>;
}

/**
 * Create List, add / delete items
 */
export class LoneScale<L extends string, C extends IContext = never, P extends LoneScaleProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.loneScale" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.loneScaleApiCredentials];
    }

}
