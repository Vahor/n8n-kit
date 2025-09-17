// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HaloPSAApiCredentials } from "../credentials/HaloPSAApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HaloPSANodeParameters } from "../nodes/HaloPSA";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HaloPSAProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HaloPSANodeParameters;
    readonly haloPsaApiCredentials: Credentials<HaloPSAApiCredentials>;
}

/**
 * Consume HaloPSA API
 */
export class HaloPSA<L extends string, C extends IContext = never, P extends HaloPSAProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.haloPSA" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.haloPsaApiCredentials];
    }

}
