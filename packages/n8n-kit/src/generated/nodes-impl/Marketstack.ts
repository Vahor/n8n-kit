// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MarketstackApiCredentials } from "../credentials/MarketstackApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MarketstackNodeParameters } from "../nodes/Marketstack";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MarketstackProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MarketstackNodeParameters;
    readonly marketstackApiCredentials: Credentials<MarketstackApiCredentials>;
}

/**
 * Consume Marketstack API
 */
export class Marketstack<L extends string, C extends IContext = never, P extends MarketstackProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.marketstack" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.marketstackApiCredentials];
    }

}
