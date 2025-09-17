// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OneSimpleApiCredentials } from "../credentials/OneSimpleApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OneSimpleApiNodeParameters } from "../nodes/OneSimpleApi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OneSimpleApiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OneSimpleApiNodeParameters;
    readonly oneSimpleApiCredentials: Credentials<OneSimpleApiCredentials>;
}

/**
 * A toolbox of no-code utilities
 */
export class OneSimpleApi<L extends string, C extends IContext = never, P extends OneSimpleApiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.oneSimpleApi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.oneSimpleApiCredentials];
    }

}
