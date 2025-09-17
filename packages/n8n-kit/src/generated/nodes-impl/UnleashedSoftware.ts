// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UnleashedSoftwareApiCredentials } from "../credentials/UnleashedSoftwareApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { UnleashedSoftwareNodeParameters } from "../nodes/UnleashedSoftware";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface UnleashedSoftwareProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: UnleashedSoftwareNodeParameters;
    readonly unleashedSoftwareApiCredentials: Credentials<UnleashedSoftwareApiCredentials>;
}

/**
 * Consume Unleashed Software API
 */
export class UnleashedSoftware<L extends string, C extends IContext = never, P extends UnleashedSoftwareProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.unleashedSoftware" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.unleashedSoftwareApiCredentials];
    }

}
