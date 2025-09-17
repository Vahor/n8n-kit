// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SalesmateApiCredentials } from "../credentials/SalesmateApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SalesmateNodeParameters } from "../nodes/Salesmate";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SalesmateProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SalesmateNodeParameters;
    readonly salesmateApiCredentials: Credentials<SalesmateApiCredentials>;
}

/**
 * Consume Salesmate API
 */
export class Salesmate<L extends string, C extends IContext = never, P extends SalesmateProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.salesmate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.salesmateApiCredentials];
    }

}
