// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DemioApiCredentials } from "../credentials/DemioApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DemioNodeParameters } from "../nodes/Demio";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DemioProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DemioNodeParameters;
    readonly demioApiCredentials: Credentials<DemioApiCredentials>;
}

/**
 * Consume the Demio API
 */
export class Demio<L extends string, C extends IContext = never, P extends DemioProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.demio" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.demioApiCredentials];
    }

}
