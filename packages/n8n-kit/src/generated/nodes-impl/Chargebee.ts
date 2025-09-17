// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChargebeeApiCredentials } from "../credentials/ChargebeeApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ChargebeeNodeParameters } from "../nodes/Chargebee";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ChargebeeProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ChargebeeNodeParameters;
    readonly chargebeeApiCredentials: Credentials<ChargebeeApiCredentials>;
}

/**
 * Retrieve data from Chargebee API
 */
export class Chargebee<L extends string, C extends IContext = never, P extends ChargebeeProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.chargebee" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.chargebeeApiCredentials];
    }

}
