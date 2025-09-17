// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Msg91ApiCredentials } from "../credentials/Msg91Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { Msg91NodeParameters } from "../nodes/Msg91";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface Msg91Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: Msg91NodeParameters;
    readonly msg91ApiCredentials: Credentials<Msg91ApiCredentials>;
}

/**
 * Sends transactional SMS via MSG91
 */
export class Msg91<L extends string, C extends IContext = never, P extends Msg91Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.msg91" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.msg91ApiCredentials];
    }

}
