// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RaindropOAuth2ApiCredentials } from "../credentials/RaindropOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RaindropNodeParameters } from "../nodes/Raindrop";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RaindropProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RaindropNodeParameters;
    readonly raindropOAuth2ApiCredentials: Credentials<RaindropOAuth2ApiCredentials>;
}

/**
 * Consume the Raindrop API
 */
export class Raindrop<L extends string, C extends IContext = never, P extends RaindropProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.raindrop" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.raindropOAuth2ApiCredentials];
    }

}
