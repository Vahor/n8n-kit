// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BaserowApiCredentials } from "../credentials/BaserowApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BaserowNodeParameters } from "../nodes/Baserow";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface BaserowProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: BaserowNodeParameters;
    readonly baserowApiCredentials: Credentials<BaserowApiCredentials>;
}

/**
 * Consume the Baserow API
 */
export class Baserow<L extends string, C extends IContext = never, P extends BaserowProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.baserow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.baserowApiCredentials];
    }

}
