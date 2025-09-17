// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PushcutApiCredentials } from "../credentials/PushcutApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PushcutNodeParameters } from "../nodes/Pushcut";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PushcutProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PushcutNodeParameters;
    readonly pushcutApiCredentials: Credentials<PushcutApiCredentials>;
}

/**
 * Consume Pushcut API
 */
export class Pushcut<L extends string, C extends IContext = never, P extends PushcutProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.pushcut" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.pushcutApiCredentials];
    }

}
