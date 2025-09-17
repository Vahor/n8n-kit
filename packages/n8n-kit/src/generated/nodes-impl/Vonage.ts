// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VonageApiCredentials } from "../credentials/VonageApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { VonageNodeParameters } from "../nodes/Vonage";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface VonageProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: VonageNodeParameters;
    readonly vonageApiCredentials: Credentials<VonageApiCredentials>;
}

/**
 * Consume Vonage API
 */
export class Vonage<L extends string, C extends IContext = never, P extends VonageProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.vonage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.vonageApiCredentials];
    }

}
