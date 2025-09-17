// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TaigaApiCredentials } from "../credentials/TaigaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TaigaNodeParameters } from "../nodes/Taiga";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TaigaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TaigaNodeParameters;
    readonly taigaApiCredentials: Credentials<TaigaApiCredentials>;
}

/**
 * Consume Taiga API
 */
export class Taiga<L extends string, C extends IContext = never, P extends TaigaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.taiga" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.taigaApiCredentials];
    }

}
