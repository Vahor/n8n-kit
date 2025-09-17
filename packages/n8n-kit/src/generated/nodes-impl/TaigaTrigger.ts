// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TaigaApiCredentials } from "../credentials/TaigaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TaigaTriggerNodeParameters } from "../nodes/TaigaTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TaigaTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TaigaTriggerNodeParameters;
    readonly taigaApiCredentials: Credentials<TaigaApiCredentials>;
}

/**
 * Handle Taiga events via webhook
 */
export class TaigaTrigger<L extends string, C extends IContext = never, P extends TaigaTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.taigaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.taigaApiCredentials];
    }

}
