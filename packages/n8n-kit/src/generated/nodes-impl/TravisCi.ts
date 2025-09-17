// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TravisCiApiCredentials } from "../credentials/TravisCiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TravisCiNodeParameters } from "../nodes/TravisCi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TravisCiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TravisCiNodeParameters;
    readonly travisCiApiCredentials: Credentials<TravisCiApiCredentials>;
}

/**
 * Consume TravisCI API
 */
export class TravisCi<L extends string, C extends IContext = never, P extends TravisCiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.travisCi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.travisCiApiCredentials];
    }

}
