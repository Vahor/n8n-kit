// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZulipApiCredentials } from "../credentials/ZulipApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ZulipNodeParameters } from "../nodes/Zulip";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ZulipProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ZulipNodeParameters;
    readonly zulipApiCredentials: Credentials<ZulipApiCredentials>;
}

/**
 * Consume Zulip API
 */
export class Zulip<L extends string, C extends IContext = never, P extends ZulipProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.zulip" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.zulipApiCredentials];
    }

}
