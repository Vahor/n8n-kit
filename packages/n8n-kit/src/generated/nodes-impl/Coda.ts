// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CodaApiCredentials } from "../credentials/CodaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CodaNodeParameters } from "../nodes/Coda";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CodaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CodaNodeParameters;
    readonly codaApiCredentials: Credentials<CodaApiCredentials>;
}

/**
 * Consume Coda API
 */
export class Coda<L extends string, C extends IContext = never, P extends CodaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.coda" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.codaApiCredentials];
    }

}
