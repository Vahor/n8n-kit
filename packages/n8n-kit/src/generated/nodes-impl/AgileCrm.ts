// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AgileCrmApiCredentials } from "../credentials/AgileCrmApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AgileCrmNodeParameters } from "../nodes/AgileCrm";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AgileCrmProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AgileCrmNodeParameters;
    readonly agileCrmApiCredentials: Credentials<AgileCrmApiCredentials>;
}

/**
 * Consume Agile CRM API
 */
export class AgileCrm<L extends string, C extends IContext = never, P extends AgileCrmProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.agileCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.agileCrmApiCredentials];
    }

}
