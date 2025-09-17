// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WekanApiCredentials } from "../credentials/WekanApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WekanNodeParameters } from "../nodes/Wekan";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WekanProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WekanNodeParameters;
    readonly wekanApiCredentials: Credentials<WekanApiCredentials>;
}

/**
 * Consume Wekan API
 */
export class Wekan<L extends string, C extends IContext = never, P extends WekanProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.wekan" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.wekanApiCredentials];
    }

}
