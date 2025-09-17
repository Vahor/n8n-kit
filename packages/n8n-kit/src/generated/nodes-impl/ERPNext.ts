// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ERPNextApiCredentials } from "../credentials/ERPNextApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ERPNextNodeParameters } from "../nodes/ERPNext";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ERPNextProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ERPNextNodeParameters;
    readonly erpNextApiCredentials: Credentials<ERPNextApiCredentials>;
}

/**
 * Consume ERPNext API
 */
export class ERPNext<L extends string, C extends IContext = never, P extends ERPNextProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.erpNext" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.erpNextApiCredentials];
    }

}
