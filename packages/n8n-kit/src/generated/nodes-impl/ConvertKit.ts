// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ConvertKitApiCredentials } from "../credentials/ConvertKitApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ConvertKitNodeParameters } from "../nodes/ConvertKit";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ConvertKitProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ConvertKitNodeParameters;
    readonly convertKitApiCredentials: Credentials<ConvertKitApiCredentials>;
}

/**
 * Consume ConvertKit API
 */
export class ConvertKit<L extends string, C extends IContext = never, P extends ConvertKitProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.convertKit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.convertKitApiCredentials];
    }

}
