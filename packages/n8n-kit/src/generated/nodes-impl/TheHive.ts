// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TheHiveApiCredentials } from "../credentials/TheHiveApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TheHiveNodeParameters } from "../nodes/TheHive";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TheHiveProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TheHiveNodeParameters;
    readonly theHiveApiCredentials: Credentials<TheHiveApiCredentials>;
}

/**
 * Consume TheHive API
 */
export class TheHive<L extends string, C extends IContext = never, P extends TheHiveProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.theHive" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.theHiveApiCredentials];
    }

}
