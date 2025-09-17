// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EgoiApiCredentials } from "../credentials/EgoiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EgoiNodeParameters } from "../nodes/Egoi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EgoiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EgoiNodeParameters;
    readonly egoiApiCredentials: Credentials<EgoiApiCredentials>;
}

/**
 * Consume E-goi API
 */
export class Egoi<L extends string, C extends IContext = never, P extends EgoiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.egoi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.egoiApiCredentials];
    }

}
