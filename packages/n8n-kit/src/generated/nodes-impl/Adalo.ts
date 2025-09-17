// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AdaloApiCredentials } from "../credentials/AdaloApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AdaloNodeParameters } from "../nodes/Adalo";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AdaloProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AdaloNodeParameters;
    readonly adaloApiCredentials: Credentials<AdaloApiCredentials>;
}

/**
 * Consume Adalo API
 */
export class Adalo<L extends string, C extends IContext = never, P extends AdaloProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.adalo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.adaloApiCredentials];
    }

}
