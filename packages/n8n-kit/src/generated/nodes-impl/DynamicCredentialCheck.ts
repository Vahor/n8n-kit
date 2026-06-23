// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DynamicCredentialCheckNodeParameters } from "../nodes/DynamicCredentialCheck";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DynamicCredentialCheckProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DynamicCredentialCheckNodeParameters;
}

/**
 * Checks whether the triggering user has the required Private credential configured. Routes to "Ready" or "Not Ready" and returns auth URLs when the credential is missing.
 */
export class DynamicCredentialCheck<L extends string, C extends IContext = never, P extends DynamicCredentialCheckProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.dynamicCredentialCheck" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
