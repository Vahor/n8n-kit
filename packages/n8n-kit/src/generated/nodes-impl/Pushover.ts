// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PushoverApiCredentials } from "../credentials/PushoverApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PushoverNodeParameters } from "../nodes/Pushover";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PushoverProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PushoverNodeParameters;
    readonly pushoverApiCredentials: Credentials<PushoverApiCredentials>;
}

/**
 * Consume Pushover API
 */
export class Pushover<L extends string, C extends IContext = never, P extends PushoverProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.pushover" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.pushoverApiCredentials];
    }

}
