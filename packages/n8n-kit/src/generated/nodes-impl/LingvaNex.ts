// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LingvaNexApiCredentials } from "../credentials/LingvaNexApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LingvaNexNodeParameters } from "../nodes/LingvaNex";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LingvaNexProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LingvaNexNodeParameters;
    readonly lingvaNexApiCredentials: Credentials<LingvaNexApiCredentials>;
}

/**
 * Consume LingvaNex API
 */
export class LingvaNex<L extends string, C extends IContext = never, P extends LingvaNexProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.lingvaNex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.lingvaNexApiCredentials];
    }

}
